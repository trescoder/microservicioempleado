const departmentService = require("../services/departamento.service");

async function addDepartment(req, res) {
  const { nombre, presupuesto } = req.body;
  const department = await departmentService.createDepartment({
    nombre,
    presupuesto,
  });
  res.status(200).json(department?.toJSON());
}

async function getSingleDepartmentByPK(req, res) {
  const { codigo } = req.params;
  const department = await departmentService.getSingleDepartmentByPK(codigo);
  return res.status(200).json(department?.toJSON());
}

async function updateDepartment(req, res) {
  const { codigo } = req.params;
  const department = await departmentService.updateDepartment(codigo, req.body);
  return res.status(200).json(department?.toJSON());
}

async function deleteDepartment(req, res) {
  const { codigo } = req.params;
  const response = await departmentService.deleteDepartmentByPK(codigo);
  return res.status(200).json(response);
}

module.exports = {
  addDepartment,
  getSingleDepartmentByPK,
  updateDepartment,
  deleteDepartment,
};
