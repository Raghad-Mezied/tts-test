import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { speeds } from "./constant/speed";
import { languages } from "./constant/languages";
import {
  PlayerController,
  LanguageSelector,
  SliderProgress,
} from "./components";

export const App = () => {
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isSelectingLanguage, setIsSelectingLanguage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [url, setUrl] = useState("");
  const [selectedLanguage, setSelectedLanguage] =
    useState<keyof typeof languages>("AR-MSA");

  const playerContainerRef = useRef(null);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleSpeedChange = () => {
    setSelectedSpeed((prevSpeed) => {
      const currentIndex = speeds.indexOf(prevSpeed);
      const nextIndex = (currentIndex + 1) % speeds.length;
      return speeds[nextIndex];
    });
  };

  const handleLanguageSelect = (language: keyof typeof languages) =>
    setSelectedLanguage(language);

  const handleShowLanguageList = () => {
    setIsSelectingLanguage((prev) => !prev);
    setIsPlaying(false);
  };

  const handlePlayPause = () => setIsPlaying((prev) => !prev);

  const handleForward = () => {
    if (playerRef.current) {
      const newTime = Math.min(played + 10 / duration, 1);
      playerRef.current.seekTo(newTime);
      setPlayed(newTime);
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      const newTime = Math.max(played - 10 / duration, 0);
      playerRef.current.seekTo(newTime);
      setPlayed(newTime);
    }
  };

  const handleProgress = (state: { played: number; loaded: number }) => {
    setPlayed(state.played);
  };

  const handleProgressChange = (value: number[]) => {
    const newPlayed = +value[0] / duration;
    setPlayed(newPlayed);
    playerRef?.current?.seekTo(newPlayed);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") handleBackward();
    else if (event.key === "ArrowRight") handleForward();
    else if (event.key === " ") {
      console.log("hi there", "in space");
      handlePlayPause();
    }
  };

  useEffect(() => {
    // TODO: ADD GET URL LOGIC HERE
    setUrl(
      "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
    );
  }, []);

  return (
    <div
      ref={playerContainerRef}
      onKeyDown={handleKeyDown}
      className="w-[80%] mx-auto my-[20px] gap-[8px] 2xl:gap-[16px] flex flex-col border-[1px] bg-white border-[#D7EAFE] rounded-[12px] p-[20px] 2xl:p-[40px]"
    >
      <ReactPlayer
        ref={playerRef}
        style={{ outline: "none" }}
        url={url}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        playing={isPlaying}
        playbackRate={selectedSpeed}
        onDuration={setDuration}
        onProgress={handleProgress}
        height={0}
      />

      {isSelectingLanguage ? (
        <LanguageSelector
          handleClose={handleShowLanguageList}
          handleLanguageSelect={handleLanguageSelect}
          selectedLanguage={selectedLanguage}
        />
      ) : (
        <>
          <SliderProgress
            played={played}
            duration={duration}
            handleProgressChange={handleProgressChange}
          />
          <PlayerController
            handleBackward={handleBackward}
            handlePlayPause={handlePlayPause}
            isPlaying={isPlaying}
            handleForward={handleForward}
            handleSpeedChange={handleSpeedChange}
            selectedSpeed={selectedSpeed}
            handleShowLanguageList={handleShowLanguageList}
            selectedLanguage={selectedLanguage}
            played={played}
            duration={duration}
          />
        </>
      )}
    </div>
  );
};
