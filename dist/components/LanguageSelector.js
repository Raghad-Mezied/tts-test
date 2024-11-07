import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { languages } from "../constant/languages";
import Close from "../assets/icons/close-circle.svg";
export var LanguageSelector = function LanguageSelector(_ref) {
  var handleClose = _ref.handleClose,
    handleLanguageSelect = _ref.handleLanguageSelect,
    selectedLanguage = _ref.selectedLanguage;
  return _jsxs(_Fragment, {
    children: [_jsxs("div", {
      className: "flex justify-between items-center",
      children: [_jsx("h6", {
        className: "text-[#050505] font-baloo2 font-[500] text-[16px] 2xl:text-[20px]",
        children: "Select Language"
      }), _jsx("img", {
        onClick: handleClose,
        src: Close,
        alt: "Close",
        className: "cursor-pointer"
      })]
    }), _jsx("div", {
      className: "flex flex-wrap gap-[8px] my-[4px] 2xl:my-[8px] 2xl:gap-[16px]",
      children: Object.keys(languages).map(function (language) {
        return _jsxs("button", {
          onClick: function onClick() {
            return handleLanguageSelect(language);
          },
          className: "".concat(selectedLanguage === language ? "bg-[rgba(5,5,5,1)] text-[#FFFFFF]" : "bg-[rgba(5,5,5,0.05)] text-[rgba(5,5,5,0.6)]", "          py-[6px] px-[12px] 2xl:py-[12px] 2xl:px-[24px] font-baloo2 2xl:gap-[10px] rounded-[100px] text-[12px] md:text-[16px] 2xl:text-[24px] font-[400] flex justify-center items-center gap-[5px]"),
          children: [_jsx("span", {
            children: languages[language]
          }), _jsx("span", {
            children: language
          })]
        }, language);
      })
    })]
  });
};