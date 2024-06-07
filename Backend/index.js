require("dotenv").config();
const dotenvExpand = require("dotenv-expand");
const express = require("express");
const cors = require("cors");
const { usersRouter } = require("./routes/users.routes")
const { sequelize } = require("./utils/db.config");
const bookrouter = require("./routes/books.route");
const app = express();
const port = 8080;

dotenvExpand.expand(require("dotenv").config());

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Server Home Page" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.use("/users", usersRouter);
app.use('/api', bookrouter);
app.all("*", (req, res) => {
  res.status(404).json({ message: "404 Invalid Route" });
});

sequelize.sync();

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
