const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

router.get("/:codigo", departmentController.getSingleDepartmentByPK);

router.post("/add-department", departmentController.addDepartment);

router.put("/:codigo", departmentController.updateDepartment);

router.delete("/:codigo", departmentController.deleteDepartment);

module.exports = router;
