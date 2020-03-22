const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
const uuid = require("uuid");
// Use the session middleware
app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: process.env.SESH_SECRET,
    name: "User Sesh"
  })
);

// Access the session as req.session
app.get("/", function(req, res, next) {
  if (req.session.views) {
    req.session.views++;
    req.session.key = "JWT";
    res.json(req.session);
    // res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

app.get("/destroy", (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.json(req.session);
    }
  });
});

app.listen(8000, () => {
  console.log("App listening on 8000");
});
