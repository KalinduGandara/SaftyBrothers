import path from 'path';
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from "next/server";
import { NewStock, Stock, NewStockSchema, StockSchema } from "./schema";
import { prisma } from "@/prisma/client";
export async function GET(request: NextRequest) {
    const stocks = await prisma.stock.findMany({ include: { sizes: true } });

    return NextResponse.json(stocks);
}

export async function POST(request: NextRequest) {
    const body = await request.formData();
    console.log(body);
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

    const stock = await prisma.stock.findUnique({
        where: { itemCode: data.itemCode },
    });

    if (stock)
        return NextResponse.json(
            { error: "Stock already exists" },
            { status: 400 }
        );

    let imageID = '';
    if (data.image) {
        const bytes = await data.image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const ext = path.extname(data.image.name);
        const fileName = `${Date.now()}-${Math.floor(Math.random() * 100000)}${ext}`;
        const publicPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'stock_images', fileName);
        await writeFile(publicPath, buffer);
        imageID = fileName;
    }

    let newStock = await prisma.stock.create({
        data: {
            itemCode: data.itemCode,
            itemName: data.itemName,
            imageID,
        },
        include: {
            sizes: true,
        },
    });

    if (data.sizes) {
        const promises = data.sizes.map((size) => {
            return prisma.size.create({
                data: {
                    stockId: newStock.id,
                    size: size.size,
                    sizeQuantity: size.sizeQuantity,
                },
            });
        });
        const sizes = await Promise.all(promises);
        newStock = {
            ...newStock,
            sizes,
        };
    }

    return NextResponse.json(data, { status: 201 });
}