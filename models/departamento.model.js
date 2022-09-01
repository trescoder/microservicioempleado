const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.connection");

const DepartmentModel = sequelize.define(
  "Department",
  {
    // Model attributes are define here
    codigo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    presupuesto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false, // removed timestamps for being auto created
    indexes: [{ unique: true, fields: ["codigo"] }], // set codigo as an index
  }
);

module.exports = DepartmentModel;
