/*
  Warnings:

  - You are about to drop the column `nftId` on the `Tier` table. All the data in the column will be lost.
  - Added the required column `chain_id` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_erc721` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `large_image` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long_description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_count` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_image` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripton` to the `Tier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filled` to the `Tier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_length` to the `Tier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_length_unit` to the `Tier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supply` to the `Tier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Tier` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tier" DROP CONSTRAINT "Tier_nftId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "chain_id" INTEGER NOT NULL,
ADD COLUMN     "is_erc721" BOOLEAN NOT NULL,
ADD COLUMN     "large_image" TEXT NOT NULL,
ADD COLUMN     "long_description" TEXT NOT NULL,
ADD COLUMN     "member_count" INTEGER NOT NULL,
ADD COLUMN     "short_description" TEXT NOT NULL,
ADD COLUMN     "thumbnail_image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tier" DROP COLUMN "nftId",
ADD COLUMN     "descripton" TEXT NOT NULL,
ADD COLUMN     "filled" INTEGER NOT NULL,
ADD COLUMN     "nFTId" TEXT,
ADD COLUMN     "subscription_length" INTEGER NOT NULL,
ADD COLUMN     "subscription_length_unit" TEXT NOT NULL,
ADD COLUMN     "supply" INTEGER NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "feature" TEXT NOT NULL,
    "tierId" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcceptedPayment" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "is_eth" BOOLEAN NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "AcceptedPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tier" ADD CONSTRAINT "Tier_nFTId_fkey" FOREIGN KEY ("nFTId") REFERENCES "NFT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "Tier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedPayment" ADD CONSTRAINT "AcceptedPayment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
