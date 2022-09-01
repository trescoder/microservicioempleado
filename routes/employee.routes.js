const router = require("express").Router();
const employeeController = require("../controllers/employee.controller");

router.get("/", employeeController.getAllEmployees);
router.get("/:codigo", employeeController.getSingleEmployeeByPK);

router.put("/:codigo", employeeController.updateEmployee);

router.post("/add-employee", employeeController.addEmployee);

router.delete("/:codigo", employeeController.removeEmployee);

module.exports = router;
