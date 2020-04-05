const router = require("express").Router();
const User = require("../../db/models/User");
const auth = require("../../middleware/auth");

const session = require("../../middleware/session");

router.get("/users/me", auth, async (req, res) => {
  // View logged in user profile
  res.json({ name: req.user.name, id: req.user._id, token: req.token });
});

router.post("/users", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    req.session.key = token;
    return res
      .status(200)
      .send({ status: 200, message: "Signup successfull!" });
  } catch (error) {
    res.status(409).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res.status(401).send({
        status: 401,
        message: "Login failed! Check authentication credentials",
      });
    } else {
      const token = await user.generateAuthToken();
      req.session.key = token;
      return res
        .status(200)
        .send({ status: 200, message: "Login successfull!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    session.logout(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    session.logout(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
