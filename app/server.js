const express = require("express");
const math = require("./math");

const app = express();

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: math.add(a, b) });
});

app.get("/subtract", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: math.subtract(a, b) });
});

app.get("/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: math.multiply(a, b) });
});

app.get("/divide", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  try {
    res.send({ result: math.divide(a, b) });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = app;
