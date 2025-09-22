const express = require("express");
const registerController = require("../controlers/register.controller");

const router = express.Router();

router.get("/", registerController.getInfoRegister);
router.get("/:id", registerController.getInfoRegisterById);
router.post("/", registerController.registerCustomerInfo);
router.put("/:id", registerController.updateInfoRegister);
router.delete("/:id", registerController.deleteInfoRegister);

module.exports = router;
