import { speeds } from "../constant/speed";
import { languages } from "../constant/languages";
interface PlayerControllerProps {
    played: number;
    duration: number;
    handleBackward: () => void;
    handlePlayPause: () => void;
    isPlaying: boolean;
    handleForward: () => void;
    handleSpeedChange: () => void;
    selectedSpeed: (typeof speeds)[number];
    handleShowLanguageList: () => void;
    selectedLanguage: keyof typeof languages;
}
export declare const PlayerController: ({ handleBackward, handlePlayPause, isPlaying, handleForward, handleSpeedChange, selectedSpeed, handleShowLanguageList, selectedLanguage, }: PlayerControllerProps) => import("react/jsx-runtime").JSX.Element;
export {};
