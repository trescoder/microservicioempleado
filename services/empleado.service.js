const EmpleadoModel = require("../models/empleado.model");

async function getAllEmployees() {
  try {
    return EmpleadoModel.findAll();
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getAllEmployees };
