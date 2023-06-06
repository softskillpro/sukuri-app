-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- CreateTable
CREATE TABLE "_userSubscriptions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userSubscriptions_AB_unique" ON "_userSubscriptions"("A", "B");

-- CreateIndex
CREATE INDEX "_userSubscriptions_B_index" ON "_userSubscriptions"("B");

-- AddForeignKey
ALTER TABLE "_userSubscriptions" ADD CONSTRAINT "_userSubscriptions_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userSubscriptions" ADD CONSTRAINT "_userSubscriptions_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
