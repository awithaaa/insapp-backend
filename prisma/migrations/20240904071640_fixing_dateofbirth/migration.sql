/*
  Warnings:

  - You are about to drop the column `dataOfBirth` on the `student` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Student_added_fkey` ON `student`;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `dataOfBirth`,
    ADD COLUMN `dateOfBirth` VARCHAR(191) NOT NULL;
