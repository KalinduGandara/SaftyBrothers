"use client";
import React, { useEffect, useState } from 'react'
import { QuotationStock } from '../quotation/QuotationStock'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { QuotationCustomer } from '../customer/Customer';
import companydetails from '../Constans/company';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


interface Props {
    stocks: QuotationStock[],
    customer: QuotationCustomer,
    onStockDelete: (stock: QuotationStock) => void,
    onStockUpdate: (stock: QuotationStock) => void
}

const QuoatTable = ({ stocks, onStockDelete, onStockUpdate, customer }: Props) => {
    const [totalDiscount, setTotalDiscount] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const calculateTotal = () => {
        const total = stocks.reduce((acc, stock) => acc + stock.total, 0);
        // if total is Nan set it to 0
        if (total !== total) {
            setSubTotal(0);
            setTotal(0);
            return;
        }
        setSubTotal(total);
        setTotal(total - total * totalDiscount / 100);
    }
    useEffect(() => {
        calculateTotal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stocks, totalDiscount])

    const calculateStockTotal = (stock: QuotationStock, attr: string, value: number) => {
        if (attr === 'qty') {
            stock.quantity = value;
        }
        else if (attr === 'unit') {
            stock.unitPrice = value;
        }
        else if (attr === 'dis') {
            stock.discount = value;
        }
        if (stock.quantity && stock.unitPrice) {
            const total = stock.quantity * stock.unitPrice - (stock.quantity * stock.unitPrice * Number(stock.discount) / 100);
            stock.total = Math.round(total * 100) / 100;
        } else {
            stock.total = 0;
        }
        onStockUpdate(stock);
        calculateTotal();
    }

    function generatePDF() {
        const selectedStocks = stocks;

        const documentDefinition = {
            content: [
                // Header section
                {
                    text: 'Quotation',
                    style: 'header', // Define a header style for visual hierarchy
                },

                // Company details section with improved formatting
                {
                    table: {
                        widths: ['*', '*'], // Adjust column widths
                        body: [
                            ['Company Name', companydetails[0]],
                            ['Company Address', companydetails[1]],
                            ['Phone Number', companydetails[2]],
                            ['Email Address', companydetails[4]],
                        ],
                        layout: 'noBorders', // Remove table borders for a cleaner look
                    },
                },

                // Invoice section with clear labels and formatting
                {
                    text: 'Invoice Details',
                    style: 'subheader', // Define a subheader style for organization
                },
                {
                    table: {
                        widths: ['*', '*', '*', '*'],
                        body: [
                            ['Item Code', 'Item Name', 'Quantity', 'Price'],
                            ...selectedStocks.map(stock => [stock.itemCode, stock.itemName, stock.quantity, stock.total]),
                            ['', '', 'Total', total],
                        ],
                        styles: {
                            // Apply styles for visual clarity
                            header: {
                                bold: true,
                                fontSize: 10,
                            },
                            body: {
                                fontSize: 9,
                            },
                        },
                    },
                },

                // Customer details section with labels
                {
                    text: 'Customer Details',
                    style: 'subheader',
                },
                {
                    table: {
                        widths: ['*', '*', '*', '*'],
                        body: [
                            ['Customer Name', customer.customerName],
                            ['Address', customer.address],
                            ['Phone Number', customer.phone],
                            ['Quotation Number', customer.quotationNumber],
                        ],
                        layout: 'noBorders',
                    },
                },

                // Additional sections for professionalism
                // {
                //     text: 'Terms and Conditions',
                //     style: 'subheader',
                // },
                // {
                //     text: 'Your acceptance of this quotation signifies your agreement to our standard terms and conditions, available upon request.',
                // },
                {
                    text: 'Thank you for your business!',
                    style: 'footer', // Define a footer style for closing
                },
            ],
            // defaultStyle: {
            //     // Set default font for better readability
            //     font: 'Helvetica',
            // },
        };
        console.log(documentDefinition);

        pdfMake.createPdf(documentDefinition).download('quotation.pdf');
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-info" />
                            </label>
                        </th>
                        <th className='text-xl'>ITEM CODE</th>
                        <th className='text-xl'>ITEM NAME</th>
                        <th className='text-xl'>QTY</th>
                        <th className='text-xl'>UNIT PRICE (RS.)</th>
                        <th className='text-xl'>DISCOUNT(%)</th>
                        <th className='text-xl'>TOTAL (RS.)</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, index) => (
                        <tr key={index}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div>{stock.itemCode}</div>
                            </td>
                            <td>
                                <div>{stock.itemName}</div>
                            </td>
                            <td>
                                <input value={stock.quantity} onChange={(e) => { calculateStockTotal(stock, 'qty', Number(e.target.value)) }} type="number" placeholder="0" className="input input-sm  w-full max-w-xs" />
                            </td>
                            <td>
                                <input value={stock.unitPrice} onChange={(e) => { calculateStockTotal(stock, 'unit', Number(e.target.value)) }} type="number" placeholder="0" className="input input-sm w-full max-w-xs" />
                            </td>
                            <td>
                                <input value={stock.discount} onChange={(e) => { calculateStockTotal(stock, 'dis', Number(e.target.value)) }} type="number" placeholder="0" className="input input-sm w-full max-w-xs" />
                            </td>
                            <td>
                                <div>{stock.total}</div>
                            </td>
                            <td>
                                <button onClick={() => { onStockDelete(stock) }} className="btn btn-error btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                    </svg>

                                </button>
                            </td>


                        </tr>
                    ))}
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th className='text-l'>
                            SubTotal
                        </th>
                        <td></td>
                        <td>
                            {subTotal}
                        </td>

                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th className='text-l'>
                            Discount
                        </th>
                        <td></td>
                        <td>
                            <input onChange={(e) => { setTotalDiscount(Number(e.target.value)) }} type="number" placeholder="0" className="input input-sm w-full max-w-xs" />
                        </td>
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th className='text-l'>
                            Total
                        </th>
                        <td></td>
                        <td>
                            {total}
                        </td>

                    </tr>
                </tbody>
            </table>
            <button onClick={() => generatePDF()}>Download Invoice</button>
        </div>
    )
}

export default QuoatTable
