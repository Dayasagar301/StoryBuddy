const express=require("express")
const { Sequelize } = require('sequelize');
const cors=require("cors");
const app=express();
require("dotenv").config()
app.use(express.json());
app.use(cors());
async function connectToDB(){
    const sequelize = new Sequelize( process.env.DB_URL);
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
app.get("/",(req,res)=>{
res.send("server is running")
})
const port=8080;
app.listen(port,async()=>{
    await connectToDB()
    console.log(`server is running at port at ${port}`);
})