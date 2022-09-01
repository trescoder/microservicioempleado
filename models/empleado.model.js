const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.connection");

const DepartmentModel = require("./departamento.model");

const EmployeeModel = sequelize.define(
  "Employee",
  {
    // Model attributes are define here
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    nif: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_departamento: {
      type: DataTypes.INTEGER,
      references: {
        model: DepartmentModel,
        key: "codigo",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false, // removed timestamps for being auto created
    indexes: [{ unique: true, fields: ["codigo"] }], // set codigo as an index
  }
);

module.exports = EmployeeModel;
