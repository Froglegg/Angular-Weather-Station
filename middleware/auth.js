const jwt = require("jsonwebtoken");
const User = require("../db/models/User");

const auth = async (req, res, next) => {
  // token ternaries are for two use cases, one, we are pulling the jwt from the sesh key, two, we are using postman or something for debugging purposes (auth header statement)
  const token = req.session.key
    ? req.session.key
    : req.header("Authorization")
    ? req.header("Authorization").replace("Bearer ", "")
    : "";

  const data = token ? jwt.verify(token, process.env.JWT_KEY) : "";

  try {
    const user = await User.findOne({ _id: data._id, "tokens.token": token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
