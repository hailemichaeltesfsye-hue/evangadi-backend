require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 10000;

// db connection
const dbConnection = require("./db/dbConfig");

// user routes middleware file
const userRoutes = require("./routes/userRoute");

// question routes middleware file
const questionsRoutes = require("./routes/questionRoute");

// answer routes middleware file
const answerRoutes = require("./routes/answerRoute");

// json middleware to exract json data
app.use(express.json());
app.use(cors());

// user routes middleware
app.use("/api/users", userRoutes);

// questions routes middleware
app.use("/api/questions", questionsRoutes);

// answers routes middleware
app.use("/api/answers", answerRoutes);

async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
