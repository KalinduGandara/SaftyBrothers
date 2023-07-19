import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Item from "@/models/Item";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const item = await Item.findById(id);

        return new NextResponse(JSON.stringify(item), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();

    const newItem = new Item(body);

    try {
        await connect();

        await newItem.save();

        return new NextResponse("Item has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
