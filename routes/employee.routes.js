const router = require("express").Router();
const employeeController = require("../controllers/employee.controller");

router.get("/", employeeController.getAllEmployees);

router.post("/add-employee", employeeController.addEmployee);

router.delete("/delete-employee/:codigo", employeeController.removeEmployee);

module.exports = router;
