const router = require("express").Router();

const { register } = require("../controller/controller");
router.post("/register", register);

module.exports = router;
