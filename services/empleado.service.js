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

async function updateEmployee(employeeCode, updatedData) {
  try {
    const employee = await getSingleEmployeeByPK(employeeCode);
    employee.set({
      nombre: updatedData.nombre ?? employee.nombre,
      apellido1: updatedData.apellido1 ?? employee.apellido1,
      apellido2: updatedData.apellido2 ?? employee.apellido2,
      codigo_departamento:
        updatedData.codigo_departamento ?? employee.codigo_departamento,
    });
    return employee.save();
  } catch (error) {
    return error;
  }
}

async function deleteEmployeeByPK(employeeCode) {
  try {
    const employee = await getSingleEmployeeByPK(employeeCode);
    return employee.destroy();
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllEmployees,
  createEmployee,
  getSingleEmployeeByPK,
  updateEmployee,
  deleteEmployeeByPK,
};
