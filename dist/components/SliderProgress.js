import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Slider } from ".";
import { formatTime } from "../utils";
import Hamsa from "../assets/hamsa.svg";
export var SliderProgress = function SliderProgress(_ref) {
  var played = _ref.played,
    duration = _ref.duration,
    handleProgressChange = _ref.handleProgressChange;
  return _jsxs(_Fragment, {
    children: [_jsx(Slider, {
      value: [played * duration],
      onValueChange: handleProgressChange,
      max: duration
    }), _jsxs("div", {
      className: "flex justify-between",
      children: [_jsx("span", {
        className: "text-[12px] md:text-[14px] 2xl:text-[20px] font-baloo2 font-[400]",
        children: formatTime(played * duration)
      }), _jsxs("div", {
        className: "flex items-center gap-[5px] 2xl:gap-[15px] self-end",
        children: [_jsx("span", {
          className: "text-[#050505] text-[10px] md:text-[12px] 2xl:text-[20px] font-[400 font-baloo2",
          children: "Powered by"
        }), _jsx("img", {
          src: Hamsa,
          alt: "Hamsa logo",
          className: "mt-[3px] md:mt-[5px] 2xl:w-[100px] 2xl:h-auto"
        })]
      }), _jsx("span", {
        className: "text-[12px] md:text-[14px] 2xl:text-[20px] font-[400] font-baloo2",
        children: formatTime(duration)
      })]
    })]
  });
};