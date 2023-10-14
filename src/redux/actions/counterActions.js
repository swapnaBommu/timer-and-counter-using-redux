// define counter action constants here
export const INCREASE_COUNT = "Increase Count";
export const DECREASE_COUNT = "Decrease Count";
export const RESET_COUNT = "Reset Count";

// define counter action creators here
export const IncreaseCount = (count) =>({count, type : INCREASE_COUNT});
export const DecreaseCount = (count) => ({count, type : DECREASE_COUNT});
export const ResetCount = () => ({ type : RESET_COUNT});