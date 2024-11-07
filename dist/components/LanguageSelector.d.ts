import { languages } from "../constant/languages";
interface LanguageSelectorProp {
    handleClose: () => void;
    handleLanguageSelect: (language: keyof typeof languages) => void;
    selectedLanguage: keyof typeof languages;
}
export declare const LanguageSelector: ({ handleClose, handleLanguageSelect, selectedLanguage, }: LanguageSelectorProp) => import("react/jsx-runtime").JSX.Element;
export {};
