
import { intents } from "@/data/intents";
import { translations } from "@/data/translations";
import { type LanguageCode } from "@/store/languageStore";

/**
 * Detects the language of a message using simple keyword matching
 * In a real implementation, this would use a proper language detection library
 */
export function detectLanguage(message: string): LanguageCode {
  // Simple detection based on the presence of specific characters
  if (/[\u0600-\u06FF]/.test(message)) {
    return "ar"; // Arabic
  } 
  
  // French-specific words/characters
  if (/[éèêëàâäôöùûüÿçœæ]|bonjour|merci|salut|oui|non/.test(message.toLowerCase())) {
    return "fr";
  }
  
  // Default to English
  return "en";
}

/**
 * Check if the message is asking "how are you" in any language
 */
function isHowAreYou(message: string): boolean {
  const howAreYouPatterns = [
    // English
    /how are you/i, /how('s| is) it going/i, /how do you do/i, /how have you been/i,
    // French
    /comment (vas|allez)[ -]tu/i, /comment ça va/i, /ça va/i, /comment tu vas/i,
    // Arabic
    /كيف حالك/i, /كيفك/i, /شلونك/i, /كيف الحال/i
  ];
  
  return howAreYouPatterns.some(pattern => pattern.test(message));
}

/**
 * Process a user message and return the bot's response
 */
export function processMessage(message: string, currentLanguage: LanguageCode): string {
  if (!message || message.trim() === "") {
    return translations[currentLanguage].notFound;
  }
  
  // Check for "how are you" type questions first
  if (isHowAreYou(message)) {
    return translations[currentLanguage].howAreYou;
  }
  
  // Use the current language as the primary language for responses
  const lang = currentLanguage;
  
  // Normalize message for intent matching
  const normalizedMessage = message.toLowerCase().trim();
  
  // First, try exact matches
  for (const intent of intents[lang]) {
    for (const pattern of intent.patterns) {
      // Check for exact match or if the message contains the complete pattern
      if (normalizedMessage === pattern || normalizedMessage.includes(pattern)) {
        return getRandomResponse(intent.responses);
      }
    }
  }
  
  // If no exact match, try fuzzy matching with word tokenization
  const messageWords = normalizedMessage.split(/\s+/);
  let bestMatch = {
    intent: null as any,
    score: 0,
    confidence: 0,
    tag: ''
  };
  
  for (const intent of intents[lang]) {
    // Calculate match score across all patterns in this intent
    let intentScore = 0;
    let maxPatternScore = 0;
    
    for (const pattern of intent.patterns) {
      const patternWords = pattern.split(/\s+/);
      
      // Count matching words
      let matchingWords = 0;
      for (const word of messageWords) {
        if (word.length > 2 && patternWords.includes(word)) {
          matchingWords++;
        }
      }
      
      // Calculate pattern score based on matching words and pattern length
      const lengthScore = messageWords.length > 0 ? patternWords.length / messageWords.length : 0;
      const matchScore = messageWords.length > 0 ? matchingWords / messageWords.length : 0;
      
      // Adjust score to favor patterns with more matching words
      const patternScore = (matchScore * 0.7) + (lengthScore * 0.3);
      
      // Keep track of the best matching pattern for this intent
      if (patternScore > maxPatternScore) {
        maxPatternScore = patternScore;
      }
    }
    
    // Keep the best pattern score for this intent
    intentScore = maxPatternScore;
    
    // Update best match if this is better
    if (intentScore > bestMatch.score) {
      bestMatch = {
        intent,
        score: intentScore,
        confidence: intentScore,
        tag: intent.tag
      };
    }
  }
  
  // Further reduced confidence threshold to make the bot more responsive
  if (bestMatch.confidence >= 0.1) {
    return getRandomResponse(bestMatch.intent.responses);
  }

  // Enhanced keyword matching
  // Look for any topic that has keywords matching the user's query
  const topics = [
    { keywords: ["schedule", "timetable", "class", "emploi", "horaire", "جدول", "course", "lecture", "cours", "when", "time", "quand", "متى"], tag: "schedules" },
    { keywords: ["professor", "teacher", "faculty", "professeur", "enseignant", "أستاذ", "instructor", "lecturer", "teach", "prof", "doctor", "dr", "دكتور"], tag: "professors" },
    { keywords: ["library", "book", "bibliothèque", "livre", "مكتبة", "كتاب", "borrow", "study", "read", "research", "resource", "journal", "article"], tag: "library" },
    { keywords: ["exam", "test", "examen", "contrôle", "امتحان", "اختبار", "final", "midterm", "assessment", "grade", "score", "mark", "note"], tag: "exams" },
    { keywords: ["registration", "enroll", "inscription", "تسجيل", "register", "sign up", "course registration", "subscribe", "apply", "admission"], tag: "registration" },
    { keywords: ["facilities", "campus", "building", "installations", "مرافق", "cafeteria", "wifi", "lab", "parking", "room", "hall", "classroom", "قاعة"], tag: "facilities" },
    { keywords: ["tuition", "fee", "payment", "scholarship", "frais", "bourse", "الرسوم", "financial", "money", "cost", "pay", "fund", "دفع"], tag: "financial" },
    { keywords: ["graduation", "graduate", "diploma", "degree", "diplôme", "تخرج", "thesis", "defense", "certificate", "commencement", "finish", "complete", "final year"], tag: "graduation" },
    { keywords: ["internship", "stage", "training", "تدريب", "practical", "work experience", "industry", "company", "job", "career", "profession", "وظيفة"], tag: "internships" },
    { keywords: ["research", "project", "lab", "publication", "recherche", "بحث", "paper", "journal", "science", "scientific", "study", "experiment", "تجربة"], tag: "research" },
    { keywords: ["hello", "hi", "hey", "bonjour", "salut", "مرحبا", "السلام", "أهلا", "greetings", "morning", "afternoon", "evening", "صباح", "مساء"], tag: "greeting" },
    { keywords: ["bye", "goodbye", "see you", "au revoir", "à bientôt", "وداعا", "مع السلامة", "farewell", "later", "take care", "ciao", "adieu", "leaving"], tag: "goodbye" },
    { keywords: ["thanks", "thank", "merci", "شكرا", "appreciate", "grateful", "gratitude", "thanking", "acknowledgment", "recognition", "ممنون"], tag: "thanks" },
    { keywords: ["help", "assist", "support", "aide", "مساعدة", "guidance", "direction", "advice", "counsel", "suggestion", "tip", "hint", "نصيحة"], tag: "help" },
    { keywords: ["info", "information", "detail", "معلومات", "data", "fact", "knowledge", "inform", "tell", "explain", "شرح", "توضيح"], tag: "information" }
  ];
  
  for (const topic of topics) {
    for (const keyword of topic.keywords) {
      if (normalizedMessage.includes(keyword)) {
        // Find the intent with this tag
        const matchedIntent = intents[lang].find(i => i.tag === topic.tag);
        if (matchedIntent) {
          return getRandomResponse(matchedIntent.responses);
        }
      }
    }
  }
  
  // Try simple semantic similarity by checking if any word in the user's message appears in any pattern
  for (const intent of intents[lang]) {
    let hasWordMatch = false;
    
    for (const pattern of intent.patterns) {
      const patternWords = pattern.split(/\s+/);
      
      for (const word of messageWords) {
        if (word.length > 3 && patternWords.some(patternWord => patternWord.includes(word) || word.includes(patternWord))) {
          hasWordMatch = true;
          break;
        }
      }
      
      if (hasWordMatch) {
        return getRandomResponse(intent.responses);
      }
    }
  }
  
  // Generate a more helpful "not found" response
  return translations[lang].notFound;
}

/**
 * Get a random response from the available responses for an intent
 */
function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}
