import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const stocks = await prisma.customer.findMany();

    return NextResponse.json(stocks);
}