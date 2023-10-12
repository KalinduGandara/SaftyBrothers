'use client'
import React, { useEffect, useState } from 'react'
import SearchStock from '../Components/SearchStock'
import StockTable from '../Components/StockTable'
import { NewStock, Stock } from './StockSchema'
import AddStockModal from './AddStockModal'
import Toast from '../Components/Toast'

function StockPage() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [isAddStockModalOpen, setAddStockModalOpen] = useState<boolean>(false);

  const onSubmit = (stock: NewStock) => {
    console.log(stock);
    const formData = new FormData();
    if (stock.image)
      formData.append('image', stock.image);
    formData.append('itemCode', stock.itemCode);
    formData.append('itemName', stock.itemName);
    formData.append('sizes', JSON.stringify(stock.sizes));
    fetch('api/stock', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        fetch('api/stock')
          .then(res => res.json())
          .then(data => setStocks(data))
          .catch(err => console.log(err))
        setAddStockModalOpen(false);
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch('api/stock')
      .then(res => res.json())
      .then(data => setStocks(data))
      .catch(err => console.log(err))
  }, [])

  const onDelete = (stock: Stock) => {
    fetch(`api/stock/${stock.id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        setStocks(stocks.filter(s => s.id !== Number(data.id)))
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h1 className='text-3xl'>Stocks</h1>
      <div className='join'>
        <div className='join-item'>
          <SearchStock />
        </div>
        <div className='join-item pt-9'>
          {/* <button className="btn btn-primary mt-5">Add Stock</button> */}
          {/* <AddStockCollapse onSubmit={onSubmit} /> */}
          <button className="btn" onClick={() => { setAddStockModalOpen(true) }}>Add Stock</button>
          <AddStockModal onClose={() => { setAddStockModalOpen(false) }} isOpen={isAddStockModalOpen} onSubmit={onSubmit} />
        </div>
      </div>
      <StockTable onStockDelete={onDelete} onStockSelect={() => { }} stocks={stocks} />

    </>
  )
}

export default StockPage