const registerService = require("../services/register.service");

// Controller to get customers
exports.getInfoRegister = async (req, res) => {
  try {
    const infoRegistered = await registerService.getallInfoRegister();
    res.status(200).json(infoRegistered);
  } catch (err) {
    console.error("Error handling user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get customer by id
exports.getInfoRegisterById = async (req, res) => {
  const { id } = req.params;
  try {
    const infoRegistered = await registerService.getInfoRegisterById(id);
    res.status(200).json(infoRegistered);
  } catch (err) {
    console.error("Error handling user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to create a new customer form
exports.registerCustomerInfo = async (req, res) => {
  try {
    console.log(req.body);
    const customer = await registerService.registerCustomerInfo(req.body);
    res.status(201).json(customer);
  } catch (err) {
    console.error("Error saving customer data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to update a customer info
exports.updateInfoRegister = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await registerService.updateInfoRegister(id, req.body);
    res.status(200).json(customer);
  } catch (err) {
    console.error("Error updating customer data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to delete a customer
exports.deleteInfoRegister = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await registerService.deleteInfoRegister(id);
    res.status(200).json(customer);
  } catch (err) {
    console.error("Error deleting customer:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
