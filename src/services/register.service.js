const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Route to get all customers
exports.getallInfoRegister = async () => {
  try {
    const infoRegistered = await prisma.customer.findMany();
    return infoRegistered;
  } catch (err) {
    console.error("Error handling user data:", err);
    throw new Error("Internal Server Error");
  }
};

// Route to get customer by id
exports.getInfoRegisterById = async (id) => {
  try {
    const infoRegistered = await prisma.customer.findUnique({
      where: { id: parseInt(id) },
    });
    return infoRegistered;
  } catch (err) {
    console.error("Error handling user data:", err);
    throw new Error("Internal Server Error");
  }
};

// Route to create a new customer form
exports.registerCustomerInfo = async (data) => {
  try {
    console.log(data);
    const customer = await prisma.customer.create({
      data,
    });
    return customer;
  } catch (err) {
    console.error("Error saving customer data:", err);
    throw new Error("Internal Server Error");
  }
};

// Route to update a customer info
exports.updateInfoRegister = async (id, data) => {
  try {
    const customer = await prisma.customer.update({
      where: { id: parseInt(id) },
      data,
    });
    return customer;
  } catch (err) {
    console.error("Error updating customer data:", err);
    throw new Error("Internal Server Error");
  }
};

// Route to delete a customer
exports.deleteInfoRegister = async (id) => {
  try {
    const customer = await prisma.customer.delete({
      where: { id: parseInt(id) },
    });
    return customer;
  } catch (err) {
    console.error("Error deleting customer:", err);
    throw new Error("Internal Server Error");
  }
};
