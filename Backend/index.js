require("dotenv").config();
const dotenvExpand = require("dotenv-expand");
const express = require("express");
const cors = require("cors");
const { usersRouter } = require("./routes/users.routes")
const { sequelize } = require("./utils/db.config");
const bookrouter = require("./routes/books.route");
const app = express();
const port = 8080;
const axios = require('axios');
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
app.post('/generate-story', async (req, res) => {
  const { instructions } = req.body;
  const apiKey = '382o0ac2c14btd9435906fb13df381eb';
  const prompt = `User instructions: generate a story about ${instructions}`;
  const context = "You are a story expert and love to write stories. Your mission is to generate a story covering educational topics such as science, history, geography, and more. Incorporate moral lessons and character development. Encourage creative writing exercises and allow children to contribute to story creation. Provide bedtime story recommendations tailored to children's interests.";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  try {
      const response = await axios.get(apiURL);
      const story = Array.isArray(response.data.answer) ? response.data.answer.join("<br>") : response.data.answer;
      res.json({ story });
  } catch (error) {
      console.error('Error fetching story:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Failed to generate story' });
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
