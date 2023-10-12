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
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Quantity</th>

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
                                    <button className="btn btn-danger" onClick={() => handleDeleteStock(stock)}>
                                        Delete
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