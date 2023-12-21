import { NextRequest, NextResponse } from "next/server";
import { del, put } from '@vercel/blob';
import { NewStock, Stock, NewStockSchema, StockSchema } from "../schema";
import { prisma } from "@/prisma/client";
import path from "path";

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
    if (deletedStock.imageID)
        await del(deletedStock.imageID);
    return NextResponse.json({ id });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    console.log('PUT', params);

    const { id } = params;
    const stock = await prisma.stock.findUnique({
        where: { id: Number(id) },
    });
    if (!stock)
        return NextResponse.json({ error: "Stock not found" }, { status: 404 });

    const body = await request.formData();

    const data: NewStock = {
        image: body.get("image") as File,
        itemCode: body.get("itemCode") as string,
        itemName: body.get("itemName") as string,
        sizes: JSON.parse(body.get("sizes") as string)
    };

    const validation = NewStockSchema.safeParse(data);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });
    let imageID = stock.imageID;
    if (data.image) {
        const ext = path.extname(data.image.name);
        const fileName = `${Date.now()}-${Math.floor(Math.random() * 100000)}${ext}`;
        const blob = await put(fileName, data.image, {
            access: 'public',
        });
        if (stock.imageID)
            await del(stock.imageID);
        imageID = blob.url;
    }

    let updatedStock = await prisma.stock.update({
        where: { id: Number(id) },
        data: {
            itemCode: data.itemCode,
            itemName: data.itemName,
            imageID,
            sizes: {
                deleteMany: {},
                create: data.sizes.map((size) => ({
                    size: size.size,
                    sizeQuantity: size.sizeQuantity,
                })),
            },
        },
        include: {
            sizes: true,
        },
    });

    console.log(updatedStock);

    return NextResponse.json(updatedStock);
}