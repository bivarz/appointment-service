const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Appointment Service API" });
});

app.get("/appointments", (req, res) => {
  res.json({ appointments: [] });
});

app.post("/appointments", (req, res) => {
  const appointment = req.body;
  res.status(201).json({ message: "Appointment created", appointment });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
