/*
  Warnings:

  - A unique constraint covering the columns `[userId,projectId,tierId]` on the table `UserProject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tierId` to the `UserProject` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserProject_userId_projectId_key";

-- AlterTable
ALTER TABLE "UserProject" ADD COLUMN     "tierId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProject_userId_projectId_tierId_key" ON "UserProject"("userId", "projectId", "tierId");

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "ProjectTier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
