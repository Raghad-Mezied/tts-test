import { Slider } from ".";
import { formatTime } from "../utils";
import Hamsa from "../assets/hamsa.svg";

interface SliderProgressProp {
  played: number;
  duration: number;
  handleProgressChange: (value: number[]) => void;
}

export const SliderProgress = ({
  played,
  duration,
  handleProgressChange,
}: SliderProgressProp) => {
  return (
    <>
      <Slider
        value={[played * duration]}
        onValueChange={handleProgressChange}
        max={duration}
      />
      <div className="flex justify-between">
        <span className="text-[12px] md:text-[14px] 2xl:text-[20px] font-baloo2 font-[400]">
          {formatTime(played * duration)}
        </span>
        <div className="flex items-center gap-[5px] 2xl:gap-[15px] self-end">
          <span className="text-[#050505] text-[10px] md:text-[12px] 2xl:text-[20px] font-[400 font-baloo2">
            Powered by
          </span>
          <img
            src={Hamsa}
            alt="Hamsa logo"
            className="mt-[3px] md:mt-[5px] 2xl:w-[100px] 2xl:h-auto"
          />
        </div>
        <span className="text-[12px] md:text-[14px] 2xl:text-[20px] font-[400] font-baloo2">
          {formatTime(duration)}
        </span>
      </div>
    </>
  );
};
