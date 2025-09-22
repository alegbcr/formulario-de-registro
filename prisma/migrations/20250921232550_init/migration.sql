-- CreateTable
CREATE TABLE "public"."Customer" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birth" TIMESTAMP(3),
    "nationality" TEXT,
    "occupation" TEXT,
    "advisor" TEXT,
    "income" INTEGER,
    "networth" DOUBLE PRECISION,
    "openingAccount" INTEGER,
    "accountType" TEXT,
    "risk" INTEGER,
    "experience" TEXT,
    "purpose" TEXT,
    "accountBefore" TEXT,
    "beneficiary" TEXT,
    "bank" TEXT,
    "signature" TEXT,
    "sigdate" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
