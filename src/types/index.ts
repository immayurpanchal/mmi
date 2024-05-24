export interface MMIResponse {
  success: boolean;
  data: Data;
  error: Error;
}

export interface Data {
  fii: number;
  skew: number;
  nifty: number;
  gold: number;
  goldOnNifty: number;
  date: string;
  extrema: number;
  trin: number;
  fma: number;
  sma: number;
  momentum: number;
  vix: number;
  raw: number;
  indicator: number;
  lastDay: LastDay;
  lastWeek: LastWeek;
  lastMonth: LastMonth;
  lastYear: LastYear;
  currentValue: number;
  daily: Daily[];
}

export interface LastDay {
  fii: number;
  skew: number;
  nifty: number;
  gold: number;
  goldOnNifty: number;
  date: string;
  extrema: number;
  trin: number;
  fma: number;
  sma: number;
  momentum: number;
  vix: number;
  raw: number;
  indicator: number;
}

export interface LastWeek {
  fii: number;
  skew: number;
  nifty: number;
  gold: number;
  goldOnNifty: number;
  date: string;
  extrema: number;
  trin: number;
  fma: number;
  sma: number;
  momentum: number;
  vix: number;
  raw: number;
  indicator: number;
}

export interface LastMonth {
  fii: number;
  skew: number;
  nifty: number;
  gold: number;
  goldOnNifty: number;
  date: string;
  extrema: number;
  trin: number;
  fma: number;
  sma: number;
  momentum: number;
  vix: number;
  raw: number;
  indicator: number;
}

export interface LastYear {
  fii: number;
  skew: number;
  nifty: number;
  gold: number;
  goldOnNifty: number;
  date: string;
  extrema: number;
  trin: number;
  fma: number;
  sma: number;
  momentum: number;
  vix: number;
  raw: number;
  indicator: number;
}

export interface Daily {
  value: number;
  date: string;
}
