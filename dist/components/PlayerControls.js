import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Backward from "../assets/icons/backward-10-seconds.svg";
import Forward from "../assets/icons/forward-10-seconds.svg";
import Play from "../assets/icons/play.svg";
import Pause from "../assets/icons/pause.svg";
import { languages } from "../constant/languages";
export var PlayerController = function PlayerController(_ref) {
  var handleBackward = _ref.handleBackward,
    handlePlayPause = _ref.handlePlayPause,
    isPlaying = _ref.isPlaying,
    handleForward = _ref.handleForward,
    handleSpeedChange = _ref.handleSpeedChange,
    selectedSpeed = _ref.selectedSpeed,
    handleShowLanguageList = _ref.handleShowLanguageList,
    selectedLanguage = _ref.selectedLanguage;
  return _jsxs("div", {
    className: "flex justify-between items-center",
    children: [_jsxs("div", {
      className: "flex items-center gap-[2px] md:gap-[8px] 2xl:gap-[20px]",
      children: [_jsx("img", {
        onClick: handleBackward,
        src: Backward,
        alt: "Backward 10 seconds",
        className: "cursor-pointer scale-[.7] md:scale-100 2xl:scale-150"
      }), _jsx("button", {
        onClick: handlePlayPause,
        className: "bg-[#050505] rounded-full w-[28px] h-[28px]  md:w-[48px] md:h-[48px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center",
        children: _jsx("img", {
          src: isPlaying ? Pause : Play,
          alt: "Play/Pause",
          className: " scale-[.7] md:scale-100 2xl:scale-150"
        })
      }), _jsx("img", {
        onClick: handleForward,
        src: Forward,
        alt: "Forward 10 seconds",
        className: "cursor-pointer scale-[.7] md:scale-100 2xl:scale-150"
      })]
    }), _jsxs("div", {
      className: "flex items-center gap-[12px]",
      children: [_jsxs("button", {
        onClick: handleSpeedChange,
        className: "bg-[rgba(5,5,5,0.05)] px-[6px] 2xl:px-[12px] 2xl:py-[4px] py-[2px] rounded-[6px] font-baloo2 text-[10px] md:text-[16px] 2xl:text-[24px]",
        children: ["x", selectedSpeed]
      }), _jsxs("button", {
        onClick: handleShowLanguageList,
        className: "bg-[rgba(5,5,5,0.05)] font-baloo2 px-[6px] 2xl:gap-[10px] 2xl:px-[12px] 2xl:py-[4px] py-[2px] flex gap-[5px] rounded-[6px] capitalize text-[10px] md:text-[16px] text-nowrap 2xl:text-[24px]",
        children: [_jsx("span", {
          children: languages[selectedLanguage]
        }), _jsx("span", {
          children: selectedLanguage
        })]
      })]
    })]
  });
};