const whitelist = [
  "http://localhost:4200",
  "http://api.darksky.net",
  "https://ng-weather-station.herokuapp.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Origin: ${origin} Not allowed by CORS`));
    }
  }
};

module.exports = corsOptions;
