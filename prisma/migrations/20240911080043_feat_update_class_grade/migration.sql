/*
  Warnings:

  - You are about to alter the column `grade` on the `class` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(4))`.

*/
-- AlterTable
ALTER TABLE `class` MODIFY `grade` ENUM('GRADE01', 'GRADE02', 'GRADE03', 'GRADE04', 'GRADE05', 'GRADE06', 'GRADE07', 'GRADE08', 'GRADE09', 'GRADE10', 'GRADE11', 'GRADE12', 'GRADE13') NOT NULL;
