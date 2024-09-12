/*
  Warnings:

  - You are about to drop the column `Year` on the `teacherpayment` table. All the data in the column will be lost.
  - Added the required column `year` to the `TeacherPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacherpayment` DROP COLUMN `Year`,
    ADD COLUMN `year` VARCHAR(191) NOT NULL;
