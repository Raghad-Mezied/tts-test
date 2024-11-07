import moment from "moment";
export var formatTime = function formatTime(seconds) {
  return moment.utc(seconds * 1000).format(seconds < 3600 ? "mm:ss" : "HH:mm:ss");
};