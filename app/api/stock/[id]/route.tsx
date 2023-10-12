import path from 'path';
import { unlink } from 'fs/promises'

import { NextRequest, NextResponse } from "next/server";
import { NewStock, Stock, NewStockSchema, StockSchema } from "../schema";
import { prisma } from "@/prisma/client";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const stock = await prisma.stock.findUnique({
        where: { id: Number(id) },
    });
    if (!stock)
        return NextResponse.json({ error: "Stock not found" }, { status: 404 });

    const deletedStock = await prisma.stock.delete({
        where: { id: Number(id) },
    });
    //if image exists, delete it. image is at public/stock_images
    if (deletedStock.imageID) {
        const imagePath = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'public', 'stock_images', deletedStock.imageID);
        try {
            await unlink(imagePath);
        } catch (error) {
            console.error(`Error deleting image: ${error}`);
        }
    }

    return NextResponse.json({ id });
}