const router = require("express").Router();
const User = require("../../db/models/User");
const auth = require("../../middleware/auth");

const session = require("../../middleware/session");

router.get("/users/me", auth, async (req, res) => {
  // View logged in user profile
  res.json({ name: req.user.name, id: req.user._id });
});

router.post("/users", async (req, res) => {
  // Create a new user
  console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    session.login(req, res, token);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }

    const token = await user.generateAuthToken();

    session.login(req, res, token);
    // res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/me/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token != req.token;
    });
    await req.user.save();
    // session.destroySesh(req);
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
