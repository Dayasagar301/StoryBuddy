const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { Users } = require("../models/users.models")
const { BlacklistToken } = require("../models/blacklistToken.model");

const fs = require("fs");

const saltRounds = 10;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email: email } });

    if (!user) {
      return res
        .status(404)
        .json({ error: true, message: "User doesn't exist. Try to register." });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw new Error(err);
      }

      if (result) {
        const accessToken = jwt.sign(
          {
            _id: user._id,
            username: user.username,
            email: user.email,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        fs.appendFileSync(
          "./log.txt",
          `username: ${user.username}  |  role : ${user.role} \n`
        );

        return res.status(200).json({
          error: false,
          accessToken,
          data: {
            _id: user._id,
            username: user.username,
            email: user.email,
          },
          message: "User logged in successfully",
        });
      } else {
        return res
          .status(400)
          .json({ error: true, message: "Invalid email or password" });
      }
    });
  } catch (error) {
    console.log(error.message);

    return res.status(400).json({ error: true, message: error.message });
  }
};

const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await Users.findOne({ where: { email: email } });

    if (userExist) {
      return res
        .status(400)
        .json({ error: true, message: "Uses already exists" });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        throw new Error(err);
      }

      const user = await Users.create({
        username,
        email,

        password: hash,
      });

      return res.status(200).json({
        error: false,
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
        message: "New user has been registered",
      });
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const page = req.query.page - 1 || 0;
    const limit = req.query.limit || 5;

    // const userData = await Users.find({}, { password: 0 })
    //   .skip(limit * page)
    //   .limit(limit);

    const offset = limit * page;

    const userData = await Users.findAll({
      attributes: { exclude: ["password"] },
      offset: offset,
      limit: limit,
    });

    const totalData = await Users.count();

    const totalPages = Math.ceil(totalData / limit);

    return res.status(200).json({
      error: false,
      limit,
      currentPage: page + 1,
      totalCount: totalData,
      totalPages,
      data: userData,
      message: "User get route",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(400).json({ error: true, message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await Users.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!userData) {
      return res
        .status(404)
        .json({ error: true, message: `User with Id : ${id} doesn't exists.` });
    }

    return res.status(200).json({
      error: false,
      data: userData,
      message: "Users get by id route",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = req.body;

    const userData = await Users.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!userData) {
      return res.status(404).json({
        error: true,
        message: `User with Id : ${id} doesn't exists.`,
      });
    }

    const updateObjectArray = Object.keys(updateData)
      .filter((updateKey) => {
        return updateKey != "email" && updateKey != "_id";
      })
      .map((updateKey) => {
        if (updateKey != "email" && updateKey != "_id") {
          return { [updateKey]: updateData[updateKey] };
        }
      });

    const updateObject = updateObjectArray.reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});

    // const updatedUserData = await Users.findByIdAndUpdate(id, updateObject, {
    //   new: true,
    //   upsert: true,
    // });

    await Users.update(updateObject, {
      where: { _id: id },
    });

    return res.status(200).json({
      error: false,
      data: { _id: id },
      message: `User with Id :${id} has been updated`,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await Users.destroy({
      where: {
        _id: id,
      },
    });

    if (!userData) {
      return res.status(404).json({
        error: true,
        message: `User with Id : ${id} doesn't exists.`,
      });
    }

    return res.status(200).json({
      error: false,
      data: userData,
      message: `User with Id :${id} has been deleted`,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] == "Bearer"
    ) {
      const accessToken = req.headers.authorization.split(" ")[1];

      const blacklistToken = await BlacklistToken.create({
        token: accessToken,
      });

      return res.status(200).json({
        error: false,
        message: "User logged out successfully",
      });
    } else {
      return res
        .status(400)
        .json({ error: true, message: "Access Token Required" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};
module.exports = {
  userLogin,
  userRegister,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  logoutUser,
};
