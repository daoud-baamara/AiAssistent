
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguageStore } from "@/store/languageStore";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: "user" | "bot";
    timestamp: Date;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { currentLanguage } = useLanguageStore();
  const isRTL = currentLanguage === "ar";
  const directionClass = isRTL ? "rtl" : "ltr";
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-message-fade-in",
        message.sender === "user" ? "justify-end" : "justify-start"
      )}
    >
      {message.sender === "bot" && (
        <div className="mr-2">
          <Avatar>
            <AvatarImage src="/bot-avatar.png" />
            <AvatarFallback className="bg-usthb text-white">UA</AvatarFallback>
          </Avatar>
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] p-3 rounded-lg animate-message-fade-in",
          message.sender === "user" 
            ? `user-message ${directionClass} bg-usthb text-white` 
            : `bot-message ${directionClass} bg-gray-100 text-gray-800`,
        )}
      >
        <p className={directionClass}>{message.content}</p>
        <div 
          className={cn(
            "text-xs mt-1 opacity-70",
            message.sender === "user" ? "text-gray-200" : "text-gray-500",
            directionClass
          )}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {message.sender === "user" && (
        <div className="ml-2">
          <Avatar>
            <AvatarImage src="/user-avatar.png" />
            <AvatarFallback className="bg-gray-300">U</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
