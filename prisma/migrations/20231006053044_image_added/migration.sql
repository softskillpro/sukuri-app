-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "discord_url" TEXT,
ADD COLUMN     "instagram_url" TEXT,
ADD COLUMN     "medium_url" TEXT,
ADD COLUMN     "telegram_url" TEXT,
ADD COLUMN     "twitter_url" TEXT,
ADD COLUMN     "website_url" TEXT;

-- CreateTable
CREATE TABLE "PaymentHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "txn_date" TIMESTAMP(3) NOT NULL,
    "txn_hash" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "token_paid_in" TEXT NOT NULL,
    "confirmation" BOOLEAN NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT,

    CONSTRAINT "PaymentHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentHistory_id_key" ON "PaymentHistory"("id");

-- CreateIndex
CREATE INDEX "PaymentHistory_userId_idx" ON "PaymentHistory"("userId");

-- CreateIndex
CREATE INDEX "PaymentHistory_subscriptionId_idx" ON "PaymentHistory"("subscriptionId");

-- CreateIndex
CREATE INDEX "PaymentHistory_txn_hash_idx" ON "PaymentHistory"("txn_hash");

-- AddForeignKey
ALTER TABLE "PaymentHistory" ADD CONSTRAINT "PaymentHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentHistory" ADD CONSTRAINT "PaymentHistory_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentHistory" ADD CONSTRAINT "PaymentHistory_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
