/*
  Warnings:

  - You are about to drop the column `classId` on the `studentpayment` table. All the data in the column will be lost.
  - Added the required column `classID` to the `StudentPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `studentpayment` DROP COLUMN `classId`,
    ADD COLUMN `classID` INTEGER NOT NULL;
