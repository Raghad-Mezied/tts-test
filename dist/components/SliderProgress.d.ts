interface SliderProgressProp {
    played: number;
    duration: number;
    handleProgressChange: (value: number[]) => void;
}
export declare const SliderProgress: ({ played, duration, handleProgressChange, }: SliderProgressProp) => import("react/jsx-runtime").JSX.Element;
export {};
