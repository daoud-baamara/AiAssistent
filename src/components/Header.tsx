
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { type LanguageCode } from "@/store/languageStore";

const Header = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-usthb text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="/usthb-logo.png"
            alt="USTHB Logo"
            className="h-10 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placeholder.pics/svg/40x40/005599-005599/USTHB";
            }}
          />
          <h1 className="text-xl font-bold">USTHB Assistant</h1>
        </div>
        
        <div className="flex space-x-2">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? "default" : "outline"}
              className={`${
                currentLanguage === lang.code 
                  ? "bg-white text-usthb" 
                  : "bg-transparent text-white border-white"
              }`}
              onClick={() => setLanguage(lang.code as LanguageCode)}
            >
              {lang.nativeName}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
