const employeeService = require("../services/empleado.service");

async function getAllEmployees(req, res) {
  const employees = await employeeService.getAllEmployees();
  return res.status(200).json(employees.map((em) => em.toJSON()));
}

async function getSingleEmployeeByPK(req, res) {
  const { codigo } = req.params;
  const employee = await employeeService.getSingleEmployeeByPK(codigo);
  return res.status(200).json(employee.toJSON());
}

async function addEmployee(req, res) {
  const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
  const new_employee = await employeeService.createEmployee({
    nif,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento,
  });
  res.status(201).json(new_employee.toJSON());
}

async function updateEmployee(req, res) {
  const { codigo } = req.params;
  const employee = await employeeService.updateEmployee(codigo, req.body);
  return res.status(200).json(employee.toJSON());
}

async function removeEmployee(req, res) {
  const employeeCode = req.params.codigo;
  const respo = await employeeService.deleteEmployeeByPK(employeeCode);
  return res.status(200).json({ msg: "employee removed" });
}

module.exports = {
  getAllEmployees,
  addEmployee,
  removeEmployee,
  updateEmployee,
  getSingleEmployeeByPK,
};
