const departmentModel = require("../models/departamento.model");

async function createDepartment(department) {
  try {
    return departmentModel.create(department);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createDepartment };
