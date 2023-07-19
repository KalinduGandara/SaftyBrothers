import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Invoice from "@/models/Invoice";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const invoice = await Invoice.findById(id);

        return new NextResponse(JSON.stringify(invoice), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();

    const newInvoice = new Invoice(body);

    try {
        await connect();

        await newInvoice.save();

        return new NextResponse("Invoice has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
