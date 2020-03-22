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
          host: "localhost",
          port: 6379,
          client: redisClient,
          ttl: 86400
        })
      })
    );
  },
  login: (req, res, token) => {
    req.session.key = token;
    res.redirect("/");
  }
  //   destroySesh: req => {
  //     return req.session.destroy(err => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log({ session: req.session, message: "Success!" });
  //         res.json(req.session);
  //         // redirect("/");
  //       }
  //     });
};

// Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds
// const sesh = (instance, token) => {
//   console.log("sesh!");
//   instance.use(
//     session({
//       secret: token,
//       name: "user",
//       resave: false,
//       saveUninitialized: true,
//       cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
//       store: new redisStore({
//         host: "localhost",
//         port: 6379,
//         client: redisClient,
//         ttl: 86400
//       })
//     })
//   );
// };
