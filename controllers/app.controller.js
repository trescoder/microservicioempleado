const empleadoService = require("../services/empleado.service");
const departmentService = require("../services/departamento.service");

async function getAllEmployees(req, res) {
  const employees = await empleadoService.getAllEmployees();
  return res.status(200).json(employees);
}

async function addDepartment(req, res) {
  const { nombre, presupuesto } = req.body;
  const department = await departmentService.createDepartment({
    nombre,
    presupuesto,
  });
  res.status(200).json(department);
}

async function addEmployee(req, res) {
  const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
  const new_employee = await empleadoService.createEmployee({
    nif,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento,
  });
  res.status(201).json(new_employee);
}

module.exports = { getAllEmployees, addEmployee, addDepartment };
