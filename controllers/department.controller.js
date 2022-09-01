const departmentService = require("../services/departamento.service");

async function addDepartment(req, res) {
  const { nombre, presupuesto } = req.body;
  const department = await departmentService.createDepartment({
    nombre,
    presupuesto,
  });
  res.status(200).json(department);
}

module.exports = {
  addDepartment,
};
