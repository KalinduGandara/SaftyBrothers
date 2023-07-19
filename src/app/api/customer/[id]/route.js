import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Customer from "@/models/Customer";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const customer = await Customer.findById(id);

        return new NextResponse(JSON.stringify(customer), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const PUT = async (request) => {
    const body = await request.json();

    const newCustomer = new Customer(body);

    try {
        await connect();

        await newCustomer.save();

        return new NextResponse("Customer has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
