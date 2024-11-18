-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "initials" TEXT,
    "email" TEXT,
    "department" TEXT,
    "alternateDepartments" TEXT,
    "timetable" TEXT,
    "labtable" TEXT,
    "organisation" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);
