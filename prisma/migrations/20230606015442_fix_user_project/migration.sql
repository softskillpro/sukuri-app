/*
  Warnings:

  - Changed the type of `tierId` on the `UserProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "UserProject" DROP CONSTRAINT "UserProject_tierId_fkey";

-- AlterTable
ALTER TABLE "UserProject" DROP COLUMN "tierId",
ADD COLUMN     "tierId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProject_userId_projectId_tierId_key" ON "UserProject"("userId", "projectId", "tierId");

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "ProjectTier"("tier_id") ON DELETE RESTRICT ON UPDATE CASCADE;
