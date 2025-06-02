
import React from "react";
import Header from "@/components/Header";
import ChatWindow from "@/components/ChatWindow";
import { useLanguageStore } from "@/store/languageStore";

const Index = () => {
  const { currentLanguage } = useLanguageStore();
  const isRTL = currentLanguage === "ar";
  
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <h2 className={`text-2xl font-bold text-usthb mb-6 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
          USTHB ChatBot
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <ChatWindow />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 text-center text-gray-600 text-sm">
        <p>&copy; 2025 USTHB Polyglot Assistant</p>
      </footer>
    </div>
  );
};

export default Index;
