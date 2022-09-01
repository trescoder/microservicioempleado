const router = require("express").Router();
const appController = require("../controllers/app.controller");

router.get("/", appController.getAllEmployees);

module.exports = router;
