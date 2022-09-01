require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const testConnection = require("./db.connection");

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ data: {} });
});

app.listen(3000, async () => {
  await testConnection();
  console.log(`server running on port 3000`);
});
