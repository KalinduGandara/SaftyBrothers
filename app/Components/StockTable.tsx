import React from 'react'
import { Stock } from '../stock/StockSchema'
import Image from 'next/image'

interface Props {
    stocks: Stock[],
    onStockSelect: (stock: Stock) => void
    onStockDelete: (stock: Stock) => void
}

function StockTable({ stocks, onStockDelete, onStockSelect }: Props) {
    // TODO: Add sorting
    console.log(stocks);

    const handleDeleteStock = (stock: Stock) => {
        onStockDelete(stock)
    }
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-info" />
                                </label>
                            </th>
                            <th className='text-xl'>Item Code</th>
                            <th className='text-xl'>Item Name</th>
                            <th className='text-xl'>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                {stock.imageID ? (
                                                    <Image width="100" height="100" src={stock.imageID} alt="Avatar Tailwind CSS Component" />
                                                ) : <Image width="100" height="100" src="/next.svg" alt="Avatar Tailwind CSS Component" />}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{stock.itemCode}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {stock.itemName}
                                </td>
                                <td>{stock.sizes ? stock.sizes.reduce((acc, curr) => acc + curr.sizeQuantity, 0) : 0}</td>
                                <td>
                                    <button className="btn btn-sm btn-error" onClick={() => handleDeleteStock(stock)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                        </svg>

                                    </button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StockTable