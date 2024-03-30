const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const studentRouter = require("./routes/student.js");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(studentRouter);

const DB = "mongodb://127.0.0.1:27017/node-crud";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
