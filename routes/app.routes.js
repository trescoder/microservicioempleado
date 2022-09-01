const router = require("express").Router();
const appController = require("../controllers/app.controller");

router.get("/", appController.getAllEmployees);

router.post("/add-department", appController.addDepartment);
router.post("/add-employee", appController.addEmployee);

module.exports = router;
