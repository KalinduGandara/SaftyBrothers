import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Customer from "@/models/Customer";

export const GET = async (request) => {
    try {
        await connect();

        const customers = await Customer.find();

        return new NextResponse(JSON.stringify(customers), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
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
