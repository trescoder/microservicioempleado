const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

router.post("/add-department", departmentController.addDepartment);

module.exports = router;
