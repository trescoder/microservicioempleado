const { Sequelize } = require("sequelize");
const db = require("./config/db.config");

const sequelize = new Sequelize(db.name, db.username, db.password, {
  host: db.host,
  dialect: "postgres",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: true, // creates tables, drop them first if already exist
      alter: true, // alter tables in the db to make them match the model
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, testConnection };
