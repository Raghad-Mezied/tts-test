function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { speeds } from "./constant/speed";
import { PlayerController, LanguageSelector, SliderProgress } from "./components";
export var TTS = function TTS() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    selectedSpeed = _useState2[0],
    setSelectedSpeed = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSelectingLanguage = _useState4[0],
    setIsSelectingLanguage = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPlaying = _useState6[0],
    setIsPlaying = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    played = _useState8[0],
    setPlayed = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    duration = _useState10[0],
    setDuration = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    url = _useState12[0],
    setUrl = _useState12[1];
  var _useState13 = useState("AR-MSA"),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedLanguage = _useState14[0],
    setSelectedLanguage = _useState14[1];
  var playerContainerRef = useRef(null);
  var playerRef = useRef(null);
  var handleSpeedChange = function handleSpeedChange() {
    setSelectedSpeed(function (prevSpeed) {
      var currentIndex = speeds.indexOf(prevSpeed);
      var nextIndex = (currentIndex + 1) % speeds.length;
      return speeds[nextIndex];
    });
  };
  var handleLanguageSelect = function handleLanguageSelect(language) {
    return setSelectedLanguage(language);
  };
  var handleShowLanguageList = function handleShowLanguageList() {
    setIsSelectingLanguage(function (prev) {
      return !prev;
    });
    setIsPlaying(false);
  };
  var handlePlayPause = function handlePlayPause() {
    return setIsPlaying(function (prev) {
      return !prev;
    });
  };
  var handleForward = function handleForward() {
    if (playerRef.current) {
      var newTime = Math.min(played + 10 / duration, 1);
      playerRef.current.seekTo(newTime);
      setPlayed(newTime);
    }
  };
  var handleBackward = function handleBackward() {
    if (playerRef.current) {
      var newTime = Math.max(played - 10 / duration, 0);
      playerRef.current.seekTo(newTime);
      setPlayed(newTime);
    }
  };
  var handleProgress = function handleProgress(state) {
    setPlayed(state.played);
  };
  var handleProgressChange = function handleProgressChange(value) {
    var _playerRef$current;
    var newPlayed = +value[0] / duration;
    setPlayed(newPlayed);
    playerRef === null || playerRef === void 0 || (_playerRef$current = playerRef.current) === null || _playerRef$current === void 0 || _playerRef$current.seekTo(newPlayed);
  };
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "ArrowLeft") handleBackward();else if (event.key === "ArrowRight") handleForward();else if (event.key === " ") {
      console.log("hi there", "in space");
      handlePlayPause();
    }
  };
  useEffect(function () {
    // TODO: ADD GET URL LOGIC HERE
    setUrl("https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg");
  }, []);
  return _jsxs("div", {
    ref: playerContainerRef,
    onKeyDown: handleKeyDown,
    className: "w-[80%] mx-auto my-[20px] gap-[8px] 2xl:gap-[16px] flex flex-col border-[1px] bg-white border-[#D7EAFE] rounded-[12px] p-[20px] 2xl:p-[40px]",
    children: [_jsx(ReactPlayer, {
      ref: playerRef,
      style: {
        outline: "none"
      },
      url: url,
      onPlay: function onPlay() {
        return setIsPlaying(true);
      },
      onPause: function onPause() {
        return setIsPlaying(false);
      },
      playing: isPlaying,
      playbackRate: selectedSpeed,
      onDuration: setDuration,
      onProgress: handleProgress,
      height: 0
    }), isSelectingLanguage ? _jsx(LanguageSelector, {
      handleClose: handleShowLanguageList,
      handleLanguageSelect: handleLanguageSelect,
      selectedLanguage: selectedLanguage
    }) : _jsxs(_Fragment, {
      children: [_jsx(SliderProgress, {
        played: played,
        duration: duration,
        handleProgressChange: handleProgressChange
      }), _jsx(PlayerController, {
        handleBackward: handleBackward,
        handlePlayPause: handlePlayPause,
        isPlaying: isPlaying,
        handleForward: handleForward,
        handleSpeedChange: handleSpeedChange,
        selectedSpeed: selectedSpeed,
        handleShowLanguageList: handleShowLanguageList,
        selectedLanguage: selectedLanguage,
        played: played,
        duration: duration
      })]
    })]
  });
};