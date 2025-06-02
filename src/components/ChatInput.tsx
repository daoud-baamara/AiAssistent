
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { translations } from "@/data/translations";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const { currentLanguage } = useLanguageStore();
  const isRTL = currentLanguage === "ar";
  const t = translations[currentLanguage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.inputPlaceholder}
        className={isRTL ? "text-right" : "text-left"}
        dir={isRTL ? "rtl" : "ltr"}
      />
      <Button type="submit" className="bg-usthb hover:bg-usthb-dark">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
