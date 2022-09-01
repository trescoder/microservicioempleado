const departmentModel = require("../models/departamento.model");

async function createDepartment(department) {
  try {
    return departmentModel.create(department);
  } catch (error) {
    throw new Error(error);
  }
}

async function getSingleDepartmentByPK(departmentCode) {
  try {
    return departmentModel.findByPk(departmentCode);
  } catch (error) {
    throw new Error(error);
  }
}

async function updateDepartment(departmentCode, updatedData) {
  try {
    const department = await getSingleDepartmentByPK(departmentCode);
    department.set({
      nombre: updatedData.nombre ?? department.nombre,
      presupuesto: updatedData.presupuesto ?? department.presupuesto,
    });
    return await department.save();
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createDepartment,
  updateDepartment,
  getSingleDepartmentByPK,
};
