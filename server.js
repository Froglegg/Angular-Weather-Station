const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const cors = require("cors"); // allows/disallows cross-site communication
const corsOptions = require("./corsOptions");
const morgan = require("morgan"); // logs requests, use "tiny" or "combined"
const routes = require("./routes"); // api routes

// Define middleware here
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));

// Define routes here
app.use(routes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

// NODE_ENV is a heroku config... if in production environment, send to SPA build.
// the app should proxy requests to server.
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/dist")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
