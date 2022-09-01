const empleadoService = require("../services/empleado.service");

async function getAllEmployees(req, res) {
  const employees = await empleadoService.getAllEmployees();
  return res.status(200).json(employees);
}

module.exports = { getAllEmployees };
