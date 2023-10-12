-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemCode" VARCHAR(255) NOT NULL,
    "itemName" VARCHAR(255) NOT NULL,
    "imageID" TEXT,
    "description" TEXT,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "sizeQuantity" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "stockId" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_itemCode_key" ON "Stock"("itemCode");

-- CreateIndex
CREATE UNIQUE INDEX "Size_stockId_size_key" ON "Size"("stockId", "size");

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
