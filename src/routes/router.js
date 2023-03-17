const router = require("express").Router();

const serviceUsers = require("./serviceUsers");

router.use("/", serviceUsers)

module.exports = router;