
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LanguageCode = "en" | "fr" | "ar";

interface LanguageState {
  currentLanguage: LanguageCode;
  previousLanguage: LanguageCode | null;
  isChangingLanguage: boolean;
  setLanguage: (lang: LanguageCode) => void;
  setIsChangingLanguage: (isChanging: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: "en", // Default language
      previousLanguage: null,
      isChangingLanguage: false,
      setLanguage: (lang) => set((state) => ({ 
        currentLanguage: lang,
        previousLanguage: state.currentLanguage,
        isChangingLanguage: true
      })),
      setIsChangingLanguage: (isChanging) => set(() => ({
        isChangingLanguage: isChanging
      })),
    }),
    {
      name: "language-storage",
      partialize: (state) => ({
        currentLanguage: state.currentLanguage,
      }),
    }
  )
);
