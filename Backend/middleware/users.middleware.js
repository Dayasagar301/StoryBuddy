const jwt = require("jsonwebtoken");
const { Users } = require("../models/users.models");
const { BlacklistToken } = require("../models/blacklistToken.model");

const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message:
        "Some fields are missing [username, email, dob, role, location, password] all are required.",
    });
  }
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message: "Some fields are missing [email, password] all are required.",
    });
  }
};

const authenticateUser = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "Bearer"
  ) {
    const accessToken = req.headers.authorization.split(" ")[1];

    // const isBlackListed = await BlacklistToken.findOne({ token: accessToken });

    const isBlackListed = await BlacklistToken.findOne({
      where: { token: accessToken },
    });

    if (isBlackListed) {
      return res.status(400).json({ error: true, message: "Invalid Token" });
    }

    var decodedData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (decodedData) {
      const { email } = decodedData;

      const user = await Users.findOne({ where: { email: email } });

      if (user) {
        next();
      } else {
        return res.status(400).json({
          error: true,
          message: "Invalid Access Token. User does not exist",
        });
      }
    } else {
      return res
        .status(400)
        .json({ error: true, message: "Invalid Access Token" });
    }
  } else {
    return res
      .status(400)
      .json({ error: true, message: "Access Token Required" });
  }
};

const authorizeUser = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  var decodedData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  const { email } = decodedData;

  const user = await Users.findOne({ where: { email: email } });
//
  console.log(user);

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  authenticateUser,
  authorizeUser,
};
