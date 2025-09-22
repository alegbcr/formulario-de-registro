import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const customers = [
    {
      fname: "Juan",
      lname: "Pérez",
      phone: "+50688881234",
      email: "juan.perez@email.com",
      address: "San José, Costa Rica",
      birth: new Date("1985-12-19"),
      nationality: "Costa Rican",
      occupation: "Engineer",
      advisor: "Ana Gómez",
      income: 50000,
      networth: 120000,
      openingAccount: 300000,
      accountType: "Savings",
      risk: 10,
      experience: "5 years",
      purpose: "Investment",
      accountBefore: "No",
      beneficiary: "Maria Pérez",
      bank: "Banco Nacional",
      signature: "Juan Pérez",
      sigdate: new Date("2023-01-02"),
    },
    {
      fname: "María",
      lname: "Rodríguez",
      phone: "+50688882345",
      email: "maria.rodriguez@email.com",
      address: "Heredia, Costa Rica",
      birth: new Date("1990-07-15"),
      nationality: "Costa Rican",
      occupation: "Doctor",
      advisor: "Carlos Méndez",
      income: 70000,
      networth: 200000,
      openingAccount: 300000,
      accountType: "Investment",
      risk: 10,
      experience: "10 years",
      purpose: "Retirement",
      accountBefore: "Yes",
      beneficiary: "Luis Rodríguez",
      bank: "Banco de Costa Rica",
      signature: "María Rodríguez",
      sigdate: new Date("2022-05-11"),
    },
    {
      fname: "Carlos",
      lname: "Santos",
      phone: "+50688883456",
      email: "carlos.santos@email.com",
      address: "Alajuela, Costa Rica",
      birth: new Date("1982-03-22"),
      nationality: "Costa Rican",
      occupation: "Lawyer",
      advisor: "Sofía Vargas",
      income: 90000,
      networth: 300000,
      openingAccount: 300000,
      accountType: "Checking",
      risk: 10,
      experience: "15 years",
      purpose: "Savings",
      accountBefore: "No",
      beneficiary: "Ana Santos",
      bank: "Scotiabank",
      signature: "Carlos Santos",
      sigdate: new Date("2021-09-02"),
    },
  ];

  for (const customer of customers) {
    await prisma.customer.create({ data: customer });
  }

  console.log("3 customers created!");

  // await prisma.customer.deleteMany();
  // console.log("All customers deleted!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
