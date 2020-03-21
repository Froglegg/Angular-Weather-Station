const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const cors = require("cors"); // allows/disallows cross-site communication
const corsOptions = require("./corsOptions");
const morgan = require("morgan"); // logs requests, use "tiny" or "combined"
const routes = require("./routes"); // api routes
require("./db/db");

// const session = require("express-session");
// const redis = require("redis");
// const redisClient = redis.createClient();
// const redisStore = require("connect-redis")(session);

// Define middleware here
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));

// redisClient.on("error", err => {
//   console.log("Redis error: ", err);
// });

// Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds
// app.use(
//   session({
//     secret: "ThisIsHowYouUseRedisSessionStorage",
//     name: "_redisPractice",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
//     store: new redisStore({
//       host: "localhost",
//       port: 6379,
//       client: redisClient,
//       ttl: 86400
//     })
//   })
// );

// Define routes here
app.use(routes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

// NODE_ENV is a heroku config... if in production environment, send to SPA build.
// the app should proxy requests to server.
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/dist/client")));
  // Handle React routing, return all requests to angular app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/dist/client", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
