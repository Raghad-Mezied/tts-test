import { speeds } from "../constant/speed";
import Backward from "../assets/icons/backward-10-seconds.svg";
import Forward from "../assets/icons/forward-10-seconds.svg";
import Play from "../assets/icons/play.svg";
import Pause from "../assets/icons/pause.svg";
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

export const PlayerController = ({
  handleBackward,
  handlePlayPause,
  isPlaying,
  handleForward,
  handleSpeedChange,
  selectedSpeed,
  handleShowLanguageList,
  selectedLanguage,
}: PlayerControllerProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[2px] md:gap-[8px] 2xl:gap-[20px]">
        <img
          onClick={handleBackward}
          src={Backward}
          alt="Backward 10 seconds"
          className="cursor-pointer scale-[.7] md:scale-100 2xl:scale-150"
        />
        <button
          onClick={handlePlayPause}
          className="bg-[#050505] rounded-full w-[28px] h-[28px]  md:w-[48px] md:h-[48px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center"
        >
          <img
            src={isPlaying ? Pause : Play}
            alt="Play/Pause"
            className=" scale-[.7] md:scale-100 2xl:scale-150"
          />
        </button>
        <img
          onClick={handleForward}
          src={Forward}
          alt="Forward 10 seconds"
          className="cursor-pointer scale-[.7] md:scale-100 2xl:scale-150"
        />
      </div>
      <div className="flex items-center gap-[12px]">
        <button
          onClick={handleSpeedChange}
          className="bg-[rgba(5,5,5,0.05)] px-[6px] 2xl:px-[12px] 2xl:py-[4px] py-[2px] rounded-[6px] font-baloo2 text-[10px] md:text-[16px] 2xl:text-[24px]"
        >
          x{selectedSpeed}
        </button>
        <button
          onClick={handleShowLanguageList}
          className="bg-[rgba(5,5,5,0.05)] font-baloo2 px-[6px] 2xl:gap-[10px] 2xl:px-[12px] 2xl:py-[4px] py-[2px] flex gap-[5px] rounded-[6px] capitalize text-[10px] md:text-[16px] text-nowrap 2xl:text-[24px]"
        >
          <span>{languages[selectedLanguage]}</span>
          <span>{selectedLanguage}</span>
        </button>
      </div>
    </div>
  );
};
