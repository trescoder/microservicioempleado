require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const { testConnection } = require("./db.connection");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  return res.redirect(301, "/employees");
});
app.use("/employees", require("./routes/employee.routes"));
app.use("/department", require("./routes/department.routes"));

app.listen(3000, async () => {
  await testConnection();
  console.log(`server running on port 3000`);
});
