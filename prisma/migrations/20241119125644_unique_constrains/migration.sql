/*
  Warnings:

  - A unique constraint covering the columns `[name,department,organisation]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Teacher_name_department_organisation_key" ON "Teacher"("name", "department", "organisation");
