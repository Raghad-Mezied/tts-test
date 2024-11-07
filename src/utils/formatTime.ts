import moment from "moment";

export const formatTime = (seconds: number): string =>
  moment.utc(seconds * 1000).format(seconds < 3600 ? "mm:ss" : "HH:mm:ss");
