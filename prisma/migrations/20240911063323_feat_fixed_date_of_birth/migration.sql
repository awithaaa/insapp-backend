/*
  Warnings:

  - You are about to drop the column `dataOfBirth` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacher` DROP COLUMN `dataOfBirth`,
    ADD COLUMN `dateOfBirth` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
