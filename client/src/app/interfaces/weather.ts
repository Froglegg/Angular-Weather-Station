export interface Weather {
  location: {
    country: string;
    locality: string;
  };
  forecast: {
    currently: string;
    minutely: string;
    hourly: string;
    daily: string;
  };
}
