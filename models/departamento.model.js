const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.connection");

const DepartmentModel = sequelize.define(
  "Department",
  {
    // Model attributes are define here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
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
    indexes: ["codigo"], // set codigo as an index
  }
);

module.exports = DepartmentModel;
