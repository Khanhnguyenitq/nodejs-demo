const express = require("express");

const Student = require("../models/student");

const studentRouter = express.Router();

studentRouter.get("/students", async (req, res) => {
  try {
    const student = await Student.find();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRouter.post("/students", async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRouter.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = studentRouter;
