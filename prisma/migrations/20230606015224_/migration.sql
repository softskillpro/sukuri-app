/*
  Warnings:

  - A unique constraint covering the columns `[tier_id]` on the table `ProjectTier` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProjectTier_tier_id_key" ON "ProjectTier"("tier_id");
