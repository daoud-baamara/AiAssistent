
export const intents = {
  en: [
    {
      tag: "greeting",
      patterns: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "what's up", "hello there"],
      responses: [
        "Hello! How can I help you with USTHB information today?",
        "Hi there! I'm the USTHB assistant. What information do you need?",
        "Hey! What would you like to know about USTHB?",
        "Welcome! How may I assist you with university matters today?"
      ]
    },
    {
      tag: "goodbye",
      patterns: ["bye", "goodbye", "see you", "see you later", "farewell", "take care", "have a good one", "until next time", "catch you later"],
      responses: [
        "Goodbye! Feel free to ask if you have more questions about USTHB.",
        "See you later! Have a great day at USTHB!",
        "Farewell! I'm here whenever you need information about the university.",
        "Take care! Don't hesitate to come back if you need assistance."
      ]
    },
    {
      tag: "thanks",
      patterns: ["thank", "thanks", "thank you", "appreciate", "helpful", "thanks a lot", "appreciate your help", "grateful", "thank you very much"],
      responses: [
        "You're welcome! I'm happy to help with any USTHB information.",
        "Anytime! Don't hesitate to ask more questions about the university.",
        "Glad I could help! Is there anything else you'd like to know about USTHB?",
        "My pleasure! I'm here to assist USTHB students and staff."
      ]
    },
    {
      tag: "schedules",
      patterns: [
        "schedule", "timetable", "class time", "lecture", "when is the class", "course schedule", 
        "class schedule", "when does the class start", "lecture timing", "when are my classes", 
        "when is the next class", "schedule for today", "tomorrow's schedule"
      ],
      responses: [
        "You can find your class schedule on the USTHB student portal or the department notice boards. Would you like me to guide you there?",
        "Class schedules are normally posted on your department's website and physical notice boards. You can also check the USTHB mobile app.",
        "To check your schedule, log into the student portal with your credentials, go to 'Academic' and select 'Class Schedule'.",
        "Schedules are typically finalized one week before the semester begins. Check with your department secretary if you don't see your schedule online."
      ]
    },
    {
      tag: "professors",
      patterns: [
        "professor", "teacher", "instructor", "faculty", "contact professor", "office hours",
        "professor email", "teacher contact", "department faculty", "professor office",
        "how to reach professor", "schedule meeting with professor", "talk to professor"
      ],
      responses: [
        "You can find professor information on the department website. Each faculty member has a profile with contact details and office hours.",
        "Professor contact information is available in the university directory. Would you like me to show you where to find it?",
        "Faculty office hours are usually posted on their office doors and on the department website. You can also email them directly for an appointment.",
        "To meet with a professor, check their office hours first or send them an email to schedule an appointment. Most professors are happy to meet with students."
      ]
    },
    {
      tag: "library",
      patterns: [
        "library", "book", "borrow", "study room", "research", "where is the library",
        "library hours", "return books", "library resources", "digital library", 
        "access journals", "scientific papers", "library card", "borrowing limit"
      ],
      responses: [
        "The central USTHB library is located in the center of campus. It's open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM.",
        "USTHB has a main library and several departmental libraries. You can borrow books with your student ID card for up to 14 days.",
        "The library offers study spaces, computer access, and online database subscriptions. You can reserve a study room through the library website.",
        "The USTHB digital library provides access to scientific journals and databases. You can access it through the university network or using your student credentials remotely."
      ]
    },
    {
      tag: "exams",
      patterns: [
        "exam", "test", "midterm", "final", "examination", "when are exams",
        "exam schedule", "test dates", "final exam", "exam location", "exam rules",
        "permitted materials", "exam preparation", "past papers", "study for exams"
      ],
      responses: [
        "Exam schedules are typically published two weeks before the examination period. Check your department's notice board or website.",
        "Final exams usually take place in January for first-semester courses and in May/June for second-semester courses.",
        "For information about specific exams, please contact your course instructor or department administration office.",
        "To prepare for exams, review your course materials, attend review sessions, and check if past papers are available through your department or the library."
      ]
    },
    {
      tag: "registration",
      patterns: [
        "register", "registration", "sign up", "enroll", "course registration", "how to register",
        "class enrollment", "add course", "drop course", "registration deadline", 
        "late registration", "registration fee", "prerequisites", "course selection"
      ],
      responses: [
        "Course registration happens at the beginning of each semester. Log into the student portal to select your courses during the registration period.",
        "To register for courses, you need to have your student ID and password. The registration periods are announced via email and on notice boards.",
        "If you're having trouble with registration, visit the Registrar's Office in the Administration Building for assistance.",
        "Course registration typically opens two weeks before the semester starts. Make sure to check prerequisites before enrolling in advanced courses."
      ]
    },
    {
      tag: "facilities",
      patterns: [
        "facilities", "campus map", "building location", "where is", "find", "locate",
        "cafeteria", "restaurant", "sports", "gym", "laboratory", "computer lab",
        "wifi", "internet access", "parking", "bus", "transportation"
      ],
      responses: [
        "USTHB campus has many facilities including libraries, laboratories, sports facilities, and dining options. What specific facility are you looking for?",
        "You can find a campus map at the entrance of the university or on the USTHB website. It shows all buildings and main facilities.",
        "The cafeteria is located near the central square and serves meals from 11:30 AM to 2:30 PM on weekdays.",
        "WiFi is available throughout the campus. Connect to 'USTHB-Student' network and use your student credentials to log in."
      ]
    },
    {
      tag: "financial",
      patterns: [
        "tuition", "fee", "payment", "financial aid", "scholarship", "student loan",
        "pay tuition", "fee deadline", "late fee", "discount", "refund", "financial office",
        "tuition deadline", "payment methods", "financial assistance"
      ],
      responses: [
        "Tuition fees vary by program and student status. You can find detailed information at the Financial Office in the Administration Building.",
        "Payment deadlines are typically at the beginning of each semester. Late payments may incur additional fees.",
        "USTHB offers various scholarships based on academic achievement and financial need. Visit the Scholarship Office for more information.",
        "You can pay your tuition through bank transfer, at the university cashier, or through the online payment system on the student portal."
      ]
    },
    {
      tag: "graduation",
      patterns: [
        "graduation", "graduate", "commencement", "degree", "diploma", "thesis",
        "defense", "dissertation", "graduation requirements", "graduation ceremony",
        "apply for graduation", "graduation deadline", "final semester"
      ],
      responses: [
        "To graduate, you need to complete all required courses in your program and maintain the minimum GPA requirement. Check with your department for specific requirements.",
        "The graduation ceremony typically takes place in July. Information about the ceremony is sent to eligible students via email.",
        "To apply for graduation, fill out the application form available at your department office in your final semester.",
        "Thesis defense dates are arranged with your advisor and committee. Make sure to submit your thesis at least two weeks before the defense date."
      ]
    },
    {
      tag: "internships",
      patterns: [
        "internship", "practical training", "work placement", "industry experience",
        "summer internship", "find internship", "internship requirement", "internship report",
        "company partnerships", "career office", "professional experience"
      ],
      responses: [
        "USTHB has partnerships with many companies for student internships. Visit the Career Center for current opportunities.",
        "Internships are mandatory for most programs and typically last 1-3 months. They can be completed during summer breaks or the final semester.",
        "To find an internship, check the university job board, attend career fairs, or ask your department about partner companies.",
        "After completing your internship, you'll need to submit a report and possibly give a presentation. Check with your department for specific requirements."
      ]
    },
    {
      tag: "research",
      patterns: [
        "research", "project", "laboratory", "publication", "journal", "conference",
        "research group", "research funding", "join research", "undergraduate research",
        "research opportunity", "paper publication", "research professor"
      ],
      responses: [
        "USTHB has many active research groups across all faculties. Contact professors in your area of interest to join their research projects.",
        "Undergraduate students can participate in research projects. Speak with your academic advisor about opportunities in your department.",
        "Research funding is available through various national and international grants. The Research Office can provide more information.",
        "To find publications by USTHB researchers, check the university's digital repository or international scientific databases."
      ]
    }
  ],
  fr: [
    {
      tag: "greeting",
      patterns: ["bonjour", "salut", "hey", "bonsoir", "coucou", "comment ça va", "bonjour à tous", "bonne journée"],
      responses: [
        "Bonjour ! Comment puis-je vous aider avec les informations de l'USTHB aujourd'hui ?",
        "Salut ! Je suis l'assistant de l'USTHB. Quelle information recherchez-vous ?",
        "Hey ! Qu'aimeriez-vous savoir sur l'USTHB ?",
        "Bonjour ! En quoi puis-je vous être utile concernant l'université ?"
      ]
    },
    {
      tag: "goodbye",
      patterns: ["au revoir", "à bientôt", "adieu", "bye", "à plus tard", "à la prochaine", "bonne journée", "salut"],
      responses: [
        "Au revoir ! N'hésitez pas à me demander si vous avez d'autres questions sur l'USTHB.",
        "À bientôt ! Passez une excellente journée à l'USTHB !",
        "À la prochaine ! Je suis là quand vous avez besoin d'informations sur l'université.",
        "Au revoir et bonne journée ! Revenez quand vous voulez."
      ]
    },
    {
      tag: "thanks",
      patterns: ["merci", "je vous remercie", "c'est gentil", "je l'apprécie", "merci beaucoup", "grand merci", "très utile"],
      responses: [
        "De rien ! Je suis heureux de vous aider avec toute information sur l'USTHB.",
        "À votre service ! N'hésitez pas à poser d'autres questions sur l'université.",
        "Ravi d'avoir pu vous aider ! Y a-t-il autre chose que vous aimeriez savoir sur l'USTHB ?",
        "C'est mon plaisir ! Je suis là pour aider les étudiants et le personnel de l'USTHB."
      ]
    },
    {
      tag: "schedules",
      patterns: [
        "emploi du temps", "horaire", "cours", "planning", "quand est le cours", 
        "horaire des cours", "calendrier des cours", "quand commence le cours", 
        "horaire d'aujourd'hui", "emploi du temps de demain", "planning hebdomadaire"
      ],
      responses: [
        "Vous pouvez trouver votre emploi du temps sur le portail étudiant de l'USTHB ou sur les tableaux d'affichage du département. Voulez-vous que je vous guide ?",
        "Les horaires des cours sont normalement affichés sur le site web de votre département et sur les tableaux d'affichage. Vous pouvez également consulter l'application mobile USTHB.",
        "Pour vérifier votre emploi du temps, connectez-vous au portail étudiant avec vos identifiants, allez dans 'Académique' et sélectionnez 'Emploi du temps'.",
        "Les emplois du temps sont généralement finalisés une semaine avant le début du semestre. Vérifiez auprès du secrétariat de votre département si vous ne voyez pas votre emploi du temps en ligne."
      ]
    },
    {
      tag: "professors",
      patterns: [
        "professeur", "enseignant", "instructeur", "faculté", "contacter professeur", "heures de bureau",
        "email professeur", "contact enseignant", "bureau professeur", "rendez-vous professeur",
        "parler avec professeur", "consultation professeur", "disponibilité enseignant"
      ],
      responses: [
        "Vous pouvez trouver les informations sur les professeurs sur le site web du département. Chaque membre du corps enseignant a un profil avec ses coordonnées et ses heures de permanence.",
        "Les coordonnées des professeurs sont disponibles dans l'annuaire de l'université. Voulez-vous que je vous montre où le trouver ?",
        "Les heures de permanence des enseignants sont généralement affichées sur les portes de leurs bureaux et sur le site web du département. Vous pouvez également leur envoyer un email directement pour prendre rendez-vous.",
        "Pour rencontrer un professeur, vérifiez d'abord ses heures de permanence ou envoyez-lui un email pour planifier un rendez-vous. La plupart des professeurs sont heureux de rencontrer leurs étudiants."
      ]
    },
    {
      tag: "library",
      patterns: [
        "bibliothèque", "livre", "emprunter", "salle d'étude", "recherche", "où est la bibliothèque",
        "horaires bibliothèque", "retourner livres", "ressources bibliothèque", "bibliothèque numérique",
        "accès revues", "articles scientifiques", "carte bibliothèque", "limite emprunt"
      ],
      responses: [
        "La bibliothèque centrale de l'USTHB est située au centre du campus. Elle est ouverte du lundi au vendredi de 8h00 à 20h00, et le samedi de 9h00 à 17h00.",
        "L'USTHB possède une bibliothèque principale et plusieurs bibliothèques départementales. Vous pouvez emprunter des livres avec votre carte d'étudiant pour une durée maximale de 14 jours.",
        "La bibliothèque offre des espaces d'étude, un accès aux ordinateurs et des abonnements à des bases de données en ligne. Vous pouvez réserver une salle d'étude via le site web de la bibliothèque.",
        "La bibliothèque numérique de l'USTHB donne accès à des revues scientifiques et des bases de données. Vous pouvez y accéder via le réseau universitaire ou en utilisant vos identifiants étudiants à distance."
      ]
    },
    {
      tag: "exams",
      patterns: [
        "examen", "test", "partiel", "final", "contrôle", "quand sont les examens",
        "calendrier examens", "dates tests", "examen final", "lieu examen", "règles examen",
        "matériel autorisé", "préparation examen", "annales", "réviser pour examens"
      ],
      responses: [
        "Les calendriers d'examens sont généralement publiés deux semaines avant la période d'examen. Consultez le tableau d'affichage ou le site web de votre département.",
        "Les examens finaux ont généralement lieu en janvier pour les cours du premier semestre et en mai/juin pour les cours du second semestre.",
        "Pour des informations sur des examens spécifiques, veuillez contacter votre enseignant ou le secrétariat de votre département.",
        "Pour préparer vos examens, révisez vos supports de cours, assistez aux séances de révision, et vérifiez si des annales sont disponibles auprès de votre département ou de la bibliothèque."
      ]
    },
    {
      tag: "registration",
      patterns: [
        "inscription", "s'inscrire", "s'enregistrer", "comment s'inscrire", "inscription aux cours",
        "ajouter cours", "abandonner cours", "date limite inscription", "inscription tardive",
        "frais d'inscription", "prérequis", "sélection de cours", "procédure d'inscription"
      ],
      responses: [
        "L'inscription aux cours a lieu au début de chaque semestre. Connectez-vous au portail étudiant pour sélectionner vos cours pendant la période d'inscription.",
        "Pour vous inscrire aux cours, vous devez avoir votre identifiant et mot de passe étudiant. Les périodes d'inscription sont annoncées par email et sur les tableaux d'affichage.",
        "Si vous rencontrez des difficultés avec l'inscription, rendez-vous au Bureau du Registraire dans le Bâtiment Administratif pour obtenir de l'aide.",
        "L'inscription aux cours ouvre généralement deux semaines avant le début du semestre. Assurez-vous de vérifier les prérequis avant de vous inscrire à des cours avancés."
      ]
    },
    {
      tag: "facilities",
      patterns: [
        "installations", "plan du campus", "emplacement bâtiment", "où est", "trouver", "localiser",
        "cafétéria", "restaurant", "sports", "gymnase", "laboratoire", "salle informatique",
        "wifi", "accès internet", "parking", "bus", "transport"
      ],
      responses: [
        "Le campus de l'USTHB dispose de nombreuses installations, notamment des bibliothèques, des laboratoires, des installations sportives et des options de restauration. Quelle installation recherchez-vous en particulier ?",
        "Vous pouvez trouver un plan du campus à l'entrée de l'université ou sur le site web de l'USTHB. Il indique tous les bâtiments et les principales installations.",
        "La cafétéria est située près de la place centrale et sert des repas de 11h30 à 14h30 en semaine.",
        "Le WiFi est disponible dans tout le campus. Connectez-vous au réseau 'USTHB-Student' et utilisez vos identifiants d'étudiant pour vous connecter."
      ]
    },
    {
      tag: "financial",
      patterns: [
        "frais de scolarité", "frais", "paiement", "aide financière", "bourse", "prêt étudiant",
        "payer frais", "date limite paiement", "pénalité de retard", "remboursement", "bureau financier",
        "échéance paiement", "modes de paiement", "assistance financière", "réduction"
      ],
      responses: [
        "Les frais de scolarité varient selon le programme et le statut de l'étudiant. Vous pouvez trouver des informations détaillées au Bureau Financier dans le Bâtiment Administratif.",
        "Les dates limites de paiement sont généralement au début de chaque semestre. Les paiements tardifs peuvent entraîner des frais supplémentaires.",
        "L'USTHB offre diverses bourses basées sur les résultats académiques et les besoins financiers. Visitez le Bureau des Bourses pour plus d'informations.",
        "Vous pouvez payer vos frais par virement bancaire, à la caisse de l'université, ou par le système de paiement en ligne sur le portail étudiant."
      ]
    },
    {
      tag: "graduation",
      patterns: [
        "diplôme", "remise des diplômes", "cérémonie", "thèse", "soutenance", "mémoire",
        "conditions d'obtention du diplôme", "cérémonie de remise des diplômes",
        "demande de diplôme", "date limite diplôme", "dernier semestre", "fin d'études"
      ],
      responses: [
        "Pour obtenir votre diplôme, vous devez compléter tous les cours requis dans votre programme et maintenir la moyenne minimale requise. Vérifiez auprès de votre département pour les exigences spécifiques.",
        "La cérémonie de remise des diplômes a généralement lieu en juillet. Les informations sur la cérémonie sont envoyées aux étudiants éligibles par email.",
        "Pour demander votre diplôme, remplissez le formulaire disponible au bureau de votre département pendant votre dernier semestre.",
        "Les dates de soutenance de thèse sont arrangées avec votre directeur et votre comité. Assurez-vous de soumettre votre thèse au moins deux semaines avant la date de soutenance."
      ]
    },
    {
      tag: "internships",
      patterns: [
        "stage", "formation pratique", "placement professionnel", "expérience en entreprise",
        "stage d'été", "trouver stage", "exigence de stage", "rapport de stage",
        "partenariats entreprises", "bureau des carrières", "expérience professionnelle"
      ],
      responses: [
        "L'USTHB a des partenariats avec de nombreuses entreprises pour les stages étudiants. Visitez le Centre des Carrières pour les opportunités actuelles.",
        "Les stages sont obligatoires pour la plupart des programmes et durent généralement de 1 à 3 mois. Ils peuvent être effectués pendant les vacances d'été ou le dernier semestre.",
        "Pour trouver un stage, consultez le tableau des offres d'emploi de l'université, participez aux salons de l'emploi, ou renseignez-vous auprès de votre département sur les entreprises partenaires.",
        "Après avoir terminé votre stage, vous devrez soumettre un rapport et éventuellement faire une présentation. Vérifiez auprès de votre département pour les exigences spécifiques."
      ]
    },
    {
      tag: "research",
      patterns: [
        "recherche", "projet", "laboratoire", "publication", "revue", "conférence",
        "groupe de recherche", "financement recherche", "rejoindre recherche", "recherche undergraduate",
        "opportunité recherche", "publication article", "professeur recherche"
      ],
      responses: [
        "L'USTHB compte de nombreux groupes de recherche actifs dans toutes les facultés. Contactez les professeurs dans votre domaine d'intérêt pour rejoindre leurs projets de recherche.",
        "Les étudiants de premier cycle peuvent participer à des projets de recherche. Parlez-en à votre conseiller académique pour connaître les opportunités dans votre département.",
        "Des financements de recherche sont disponibles via diverses subventions nationales et internationales. Le Bureau de la Recherche peut fournir plus d'informations.",
        "Pour trouver des publications de chercheurs de l'USTHB, consultez le dépôt numérique de l'université ou les bases de données scientifiques internationales."
      ]
    }
  ],
  ar: [
    {
      tag: "greeting",
      patterns: ["مرحبا", "السلام عليكم", "أهلا", "صباح الخير", "مساء الخير", "كيف حالك", "مرحبا بالجميع", "يوم سعيد"],
      responses: [
        "مرحباً! كيف يمكنني مساعدتك بمعلومات عن جامعة هواري بومدين للعلوم والتكنولوجيا اليوم؟",
        "أهلاً! أنا مساعد جامعة هواري بومدين. ما هي المعلومات التي تحتاجها؟",
        "السلام عليكم! ماذا تريد أن تعرف عن جامعة هواري بومدين للعلوم والتكنولوجيا؟",
        "مرحباً! كيف يمكنني مساعدتك فيما يتعلق بالجامعة؟"
      ]
    },
    {
      tag: "goodbye",
      patterns: ["وداعا", "مع السلامة", "إلى اللقاء", "أراك لاحقاً", "في أمان الله", "تصبح على خير", "يوماً سعيداً"],
      responses: [
        "مع السلامة! لا تتردد في السؤال إذا كان لديك المزيد من الأسئلة حول الجامعة.",
        "إلى اللقاء! أتمنى لك يوماً رائعاً في جامعة هواري بومدين!",
        "وداعاً! أنا هنا عندما تحتاج إلى معلومات حول الجامعة.",
        "مع السلامة ويوماً سعيداً! عد متى شئت."
      ]
    },
    {
      tag: "thanks",
      patterns: ["شكرا", "شكرا لك", "أشكرك", "ممتن", "مفيد", "شكراً جزيلاً", "جزاك الله خيراً", "ممنون"],
      responses: [
        "على الرحب والسعة! يسعدني مساعدتك بأي معلومات عن جامعة هواري بومدين.",
        "العفو! لا تتردد في طرح المزيد من الأسئلة حول الجامعة.",
        "سررت بمساعدتك! هل هناك شيء آخر تود معرفته عن جامعة هواري بومدين؟",
        "الشكر لك! أنا هنا لمساعدة طلاب وموظفي جامعة هواري بومدين."
      ]
    },
    {
      tag: "schedules",
      patterns: [
        "جدول", "مواعيد", "وقت الفصل", "محاضرة", "متى الدرس", "جدول الدورة", 
        "جدول الدراسة", "متى تبدأ المحاضرة", "جدول اليوم", "جدول الغد", "الجدول الأسبوعي"
      ],
      responses: [
        "يمكنك العثور على جدولك الدراسي على بوابة الطلاب أو لوحات الإعلانات بالقسم. هل تريد أن أرشدك إلى هناك؟",
        "عادة ما يتم نشر جداول الفصول على موقع القسم ولوحات الإعلانات. يمكنك أيضاً التحقق من تطبيق الجامعة للهاتف المحمول.",
        "للتحقق من جدولك، قم بتسجيل الدخول إلى بوابة الطلاب بمعلوماتك، اذهب إلى 'الأكاديمية' واختر 'جدول الفصول'.",
        "يتم وضع الجداول الدراسية عادة قبل أسبوع من بداية الفصل الدراسي. راجع سكرتارية قسمك إذا لم تجد جدولك على الإنترنت."
      ]
    },
    {
      tag: "professors",
      patterns: [
        "أستاذ", "معلم", "مدرس", "هيئة التدريس", "الاتصال بالأستاذ", "ساعات المكتب",
        "بريد الأستاذ", "التواصل مع المدرس", "مكتب الأستاذ", "موعد مع الأستاذ",
        "التحدث مع الأستاذ", "استشارة المدرس", "توفر المعلم"
      ],
      responses: [
        "يمكنك العثور على معلومات الأساتذة على موقع القسم. لكل عضو هيئة تدريس ملف شخصي يحتوي على تفاصيل الاتصال وساعات المكتب.",
        "معلومات الاتصال بالأساتذة متاحة في دليل الجامعة. هل تريد أن أريك أين تجدها؟",
        "عادة ما يتم نشر ساعات مكتب أعضاء هيئة التدريس على أبواب مكاتبهم وعلى موقع القسم. يمكنك أيضاً مراسلتهم عبر البريد الإلكتروني مباشرة لتحديد موعد.",
        "لمقابلة أستاذ، تحقق أولاً من ساعات مكتبه أو أرسل له بريداً إلكترونياً لتحديد موعد. معظم الأساتذة سعداء بلقاء الطلاب."
      ]
    },
    {
      tag: "library",
      patterns: [
        "مكتبة", "كتاب", "استعارة", "غرفة دراسة", "بحث", "أين المكتبة",
        "ساعات المكتبة", "إرجاع الكتب", "موارد المكتبة", "المكتبة الرقمية",
        "الوصول للمجلات", "الأوراق العلمية", "بطاقة المكتبة", "حد الاستعارة"
      ],
      responses: [
        "تقع المكتبة المركزية لجامعة هواري بومدين في وسط الحرم الجامعي. وهي مفتوحة من الاثنين إلى الجمعة من الساعة 8 صباحاً حتى 8 مساءً، والسبت من 9 صباحاً حتى 5 مساءً.",
        "تمتلك الجامعة مكتبة رئيسية وعدة مكتبات قسمية. يمكنك استعارة الكتب باستخدام بطاقة الطالب الخاصة بك لمدة تصل إلى 14 يوماً.",
        "توفر المكتبة مساحات للدراسة، وإمكانية الوصول إلى أجهزة الكمبيوتر، واشتراكات في قواعد البيانات عبر الإنترنت. يمكنك حجز غرفة دراسة من خلال موقع المكتبة.",
        "توفر المكتبة الرقمية للجامعة إمكانية الوصول إلى المجلات العلمية وقواعد البيانات. يمكنك الوصول إليها من خلال شبكة الجامعة أو باستخدام بيانات اعتماد الطالب الخاصة بك عن بُعد."
      ]
    },
    {
      tag: "exams",
      patterns: [
        "امتحان", "اختبار", "منتصف الفصل", "نهائي", "متى الامتحانات", "جدول الامتحانات",
        "تواريخ الاختبارات", "الامتحان النهائي", "موقع الامتحان", "قواعد الامتحان",
        "المواد المسموح بها", "تحضير للامتحان", "أوراق سابقة", "المذاكرة للامتحانات"
      ],
      responses: [
        "عادة ما يتم نشر جداول الامتحانات قبل أسبوعين من فترة الامتحانات. تحقق من لوحة إعلانات قسمك أو الموقع الإلكتروني.",
        "تُعقد الامتحانات النهائية عادة في يناير لمقررات الفصل الدراسي الأول وفي مايو/يونيو لمقررات الفصل الدراسي الثاني.",
        "للحصول على معلومات حول امتحانات محددة، يرجى الاتصال بمدرس المقرر أو مكتب إدارة القسم.",
        "للتحضير للامتحانات، راجع مواد المقرر، احضر جلسات المراجعة، وتحقق مما إذا كانت الأوراق السابقة متاحة من خلال قسمك أو المكتبة."
      ]
    },
    {
      tag: "registration",
      patterns: [
        "تسجيل", "التسجيل", "الاشتراك", "التسجيل في المقررات", "كيفية التسجيل",
        "إضافة مقرر", "حذف مقرر", "الموعد النهائي للتسجيل", "التسجيل المتأخر",
        "رسوم التسجيل", "المتطلبات السابقة", "اختيار المقررات", "إجراءات التسجيل"
      ],
      responses: [
        "يتم تسجيل المقررات في بداية كل فصل دراسي. قم بتسجيل الدخول إلى بوابة الطلاب لاختيار مقرراتك خلال فترة التسجيل.",
        "للتسجيل في المقررات، تحتاج إلى معرف الطالب وكلمة المرور. يتم الإعلان عن فترات التسجيل عبر البريد الإلكتروني وعلى لوحات الإعلانات.",
        "إذا كنت تواجه مشكلة في التسجيل، يرجى زيارة مكتب التسجيل في مبنى الإدارة للحصول على المساعدة.",
        "يبدأ التسجيل في المقررات عادة قبل أسبوعين من بداية الفصل الدراسي. تأكد من التحقق من المتطلبات السابقة قبل التسجيل في المقررات المتقدمة."
      ]
    },
    {
      tag: "facilities",
      patterns: [
        "مرافق", "خريطة الحرم", "موقع المبنى", "أين يوجد", "إيجاد", "تحديد موقع",
        "كافتيريا", "مطعم", "رياضة", "صالة ألعاب رياضية", "مختبر", "معمل كمبيوتر",
        "واي فاي", "الوصول للإنترنت", "موقف سيارات", "حافلة", "مواصلات"
      ],
      responses: [
        "يحتوي حرم جامعة هواري بومدين على العديد من المرافق بما في ذلك المكتبات والمختبرات والمرافق الرياضية وخيارات الطعام. ما هو المرفق المحدد الذي تبحث عنه؟",
        "يمكنك العثور على خريطة الحرم الجامعي عند مدخل الجامعة أو على موقع الجامعة الإلكتروني. تظهر الخريطة جميع المباني والمرافق الرئيسية.",
        "تقع الكافتيريا بالقرب من الساحة المركزية وتقدم وجبات من الساعة 11:30 صباحًا حتى 2:30 مساءً في أيام الأسبوع.",
        "خدمة الواي فاي متوفرة في جميع أنحاء الحرم الجامعي. اتصل بشبكة 'USTHB-Student' واستخدم بيانات اعتماد الطالب الخاصة بك لتسجيل الدخول."
      ]
    },
    {
      tag: "financial",
      patterns: [
        "الرسوم الدراسية", "الرسوم", "الدفع", "المساعدة المالية", "المنحة", "قرض الطالب",
        "دفع الرسوم", "موعد نهائي للدفع", "رسوم التأخير", "الخصم", "استرداد", "المكتب المالي",
        "موعد دفع الرسوم", "طرق الدفع", "المساعدة المالية", "التخفيض"
      ],
      responses: [
        "تختلف الرسوم الدراسية حسب البرنامج ووضع الطالب. يمكنك العثور على معلومات مفصلة في المكتب المالي في المبنى الإداري.",
        "مواعيد الدفع النهائية عادة في بداية كل فصل دراسي. قد تتحمل المدفوعات المتأخرة رسومًا إضافية.",
        "تقدم الجامعة منحًا دراسية متنوعة بناءً على التحصيل الأكاديمي والحاجة المالية. قم بزيارة مكتب المنح الدراسية لمزيد من المعلومات.",
        "يمكنك دفع رسومك الدراسية من خلال التحويل المصرفي، أو في أمين صندوق الجامعة، أو من خلال نظام الدفع عبر الإنترنت على بوابة الطالب."
      ]
    },
    {
      tag: "graduation",
      patterns: [
        "تخرج", "حفل التخرج", "الشهادة", "الرسالة", "الدفاع", "الأطروحة",
        "متطلبات التخرج", "حفل التخريج", "طلب التخرج", "الموعد النهائي للتخرج", "الفصل الدراسي الأخير"
      ],
      responses: [
        "للتخرج، تحتاج إلى إكمال جميع المقررات المطلوبة في برنامجك والحفاظ على الحد الأدنى من متطلبات المعدل التراكمي. تحقق مع قسمك للمتطلبات المحددة.",
        "يقام حفل التخرج عادة في شهر يوليو. يتم إرسال معلومات حول الحفل إلى الطلاب المؤهلين عبر البريد الإلكتروني.",
        "لطلب التخرج، املأ نموذج الطلب المتاح في مكتب قسمك في الفصل الدراسي الأخير.",
        "يتم ترتيب مواعيد الدفاع عن الرسالة مع المشرف واللجنة. تأكد من تقديم رسالتك قبل موعد الدفاع بأسبوعين على الأقل."
      ]
    },
    {
      tag: "internships",
      patterns: [
        "تدريب", "تدريب عملي", "تدريب ميداني", "خبرة في الشركات",
        "تدريب صيفي", "البحث عن تدريب", "متطلبات التدريب", "تقرير التدريب",
        "شراكات الشركات", "مكتب المهنة", "خبرة مهنية"
      ],
      responses: [
        "لدى الجامعة شراكات مع العديد من الشركات لتدريب الطلاب. قم بزيارة مركز المهن للفرص الحالية.",
        "التدريب إلزامي لمعظم البرامج وعادة ما يستمر من 1 إلى 3 أشهر. يمكن إكماله خلال العطل الصيفية أو الفصل الدراسي الأخير.",
        "للعثور على تدريب، تحقق من لوحة الوظائف بالجامعة، أو حضور معارض التوظيف، أو اسأل قسمك عن الشركات الشريكة.",
        "بعد إكمال تدريبك، ستحتاج إلى تقديم تقرير وربما تقديم عرض تقديمي. تحقق مع قسمك للمتطلبات المحددة."
      ]
    },
    {
      tag: "research",
      patterns: [
        "بحث", "مشروع", "مختبر", "نشر", "مجلة", "مؤتمر",
        "مجموعة بحثية", "تمويل البحث", "الانضمام للبحث", "أبحاث طلابية",
        "فرص بحثية", "نشر ورقة", "أستاذ البحث"
      ],
      responses: [
        "تضم الجامعة العديد من مجموعات البحث النشطة في جميع الكليات. تواصل مع الأساتذة في مجال اهتمامك للانضمام إلى مشاريعهم البحثية.",
        "يمكن لطلاب المرحلة الجامعية المشاركة في مشاريع بحثية. تحدث مع مستشارك الأكاديمي حول الفرص في قسمك.",
        "تمويل البحث متاح من خلال مختلف المنح الوطنية والدولية. يمكن لمكتب البحوث تقديم المزيد من المعلومات.",
        "للعثور على منشورات من باحثي الجامعة، تحقق من المستودع الرقمي للجامعة أو قواعد البيانات العلمية الدولية."
      ]
    }
  ]
};
