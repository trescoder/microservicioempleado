const departmentModel = require("../models/departamento.model");

async function createDepartment(department) {
  try {
    return departmentModel.create(department);
  } catch (error) {
    throw new Error(error);
  }
}

async function getSingleDepartmentByPK(departmentPK) {
  try {
    return departmentModel.findByPk(departmentPK);
  } catch (error) {
    throw new Error(error);
  }
}

async function updateDepartment(departmentPK, updatedData) {
  try {
    const department = await getSingleDepartmentByPK(departmentPK);
    department.set({
      nombre: updatedData.nombre ?? department.nombre,
      presupuesto: updatedData.presupuesto ?? department.presupuesto,
    });
    return await department.save();
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteDepartmentByPK(departmentPK) {
  try {
    const department = await getSingleDepartmentByPK(departmentPK);
    await department.destroy();
    return { msg: "department removed" };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createDepartment,
  updateDepartment,
  getSingleDepartmentByPK,
  deleteDepartmentByPK,
};
