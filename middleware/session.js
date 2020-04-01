const session = require("express-session");
const redis = require("redis");
const redisClient = redis.createClient();
const redisStore = require("connect-redis")(session);
require("dotenv").config();
redisClient.on("error", err => {
  console.log("Redis error: ", err);
});
module.exports = {
  session: sesh => {
    return sesh.use(
      session({
        secret: process.env.SESH_SECRET,
        name: "userSesh",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
        store: new redisStore({
          host: process.env.REDIS_URL,
          port: process.env.PORT || 6379,
          client: redisClient,
          ttl: 86400
        })
      })
    );
  },
  login: (req, res, token) => {
    req.session.key = token;
    res.redirect("/");
  },
  logout: (req, res) => {
    req.session.key = "";
    return req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        console.log({ session: req.session, message: "Success!" });
        res.json({ seshDestroyed: true });
      }
    });
  }
};
