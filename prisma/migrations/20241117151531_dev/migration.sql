-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "organisation" TEXT,
    "department" TEXT,
    "lab" BOOLEAN,
    "timetable" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
