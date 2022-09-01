const EmpleadoModel = require("../models/empleado.model");

async function getAllEmployees() {
  try {
    return EmpleadoModel.findAll();
  } catch (error) {
    throw new Error(error);
  }
}

async function createEmployee(employee) {
  try {
    return EmpleadoModel.create(employee);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getAllEmployees, createEmployee };
