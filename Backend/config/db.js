const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbUrl = process.env.DB_URL; // Assuming DB_URL is defined in your environment variables

const sequelize = new Sequelize(dbUrl, {
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    console.error("Error stack:", error.stack);
  }
}

module.exports = { sequelize, connectToDb };
