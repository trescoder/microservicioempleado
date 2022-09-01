const employeeService = require("../services/empleado.service");

async function getAllEmployees(req, res) {
  const employees = await employeeService.getAllEmployees();
  return res.status(200).json(employees);
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
  res.status(201).json(new_employee);
}

module.exports = { getAllEmployees, addEmployee };
