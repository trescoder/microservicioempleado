const EmpleadoModel = require("../models/empleado.model");

async function getAllEmployees() {
  try {
    return EmpleadoModel.findAll();
  } catch (error) {
    throw new Error(error);
  }
}

async function getSingleEmployeeByPK(employeeCode) {
  try {
    return EmpleadoModel.findByPk(employeeCode);
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

async function deleteEmployeeByPK(employeeCode) {
  try {
    const employee = await getSingleEmployeeByPK(employeeCode);
    return EmpleadoModel.destroy(employee);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllEmployees,
  createEmployee,
  getSingleEmployeeByPK,
  deleteEmployeeByPK,
};
