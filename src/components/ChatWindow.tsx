
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { processMessage } from "@/lib/chatbot";
import { useLanguageStore } from "@/store/languageStore";
import { translations } from "@/data/translations";
import { type LanguageCode } from "@/store/languageStore";
import { useToast } from "@/hooks/use-toast";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { currentLanguage, isChangingLanguage, setIsChangingLanguage } = useLanguageStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevLangRef = useRef<LanguageCode>(currentLanguage);
  const { toast } = useToast();
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial greeting message or language change greeting
  useEffect(() => {
    const isLanguageChanged = prevLangRef.current !== currentLanguage;
    
    if (messages.length === 0 || isLanguageChanged) {
      // Add language change notification if applicable
      if (isLanguageChanged && messages.length > 0) {
        const langChangeMessage = translations[currentLanguage].languageChanged;
        addBotMessage(langChangeMessage);
        
        // Show a toast for language change
        toast({
          title: `Language changed to ${currentLanguage === "en" ? "English" : currentLanguage === "fr" ? "French" : "Arabic"}`,
          description: "The assistant will now respond in the selected language.",
          duration: 3000,
        });
        
        // Reset the language change flag
        setIsChangingLanguage(false);
      } else if (messages.length === 0) {
        // Add welcome message for new conversation
        setTimeout(() => {
          const welcomeMessage = translations[currentLanguage].welcome;
          addBotMessage(welcomeMessage);
        }, 500);
      }
      
      // Update previous language ref
      prevLangRef.current = currentLanguage;
    }
  }, [currentLanguage, messages.length, setIsChangingLanguage, toast]);

  // Add a new message from the user
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);
    
    // Process the message and get a response with a realistic delay
    setTimeout(() => {
      try {
        const botResponse = processMessage(content, currentLanguage);
        addBotMessage(botResponse);
      } catch (error) {
        console.error("Error processing message:", error);
        addBotMessage(translations[currentLanguage].notFound);
      } finally {
        setIsProcessing(false);
      }
    }, Math.random() * 400 + 600); // Random delay between 600-1000ms for natural feel
  };

  // Add a new message from the bot
  const addBotMessage = (content: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "bot",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[80vh] flex flex-col">
      <CardContent className="flex-1 overflow-y-auto p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 pr-2">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isProcessing && (
            <div className="flex items-center text-gray-500 italic mt-2">
              <span className="animate-pulse">{translations[currentLanguage].thinking}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} />
      </CardContent>
    </Card>
  );
};

export default ChatWindow;
