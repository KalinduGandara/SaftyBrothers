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
  const [filter, setFilter] = useState<string>('');
  const refresh = () => {
    fetch('api/stock')
      .then(res => res.json())
      .then(data => setStocks(data))
      .catch(err => console.log(err))
  }
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
    }).then(res => {
      if (res.ok) {
        refresh();
        setAddStockModalOpen(false);
      }
    })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    refresh();
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
      <div className=' flex felx-row px-full pt-5' >
        <div className='bg-primary text-center text-4xl top-10 font-black text-white w-full rounded w-12/12'>STOCKS</div>
      </div>
      <div className='flex flex-row gap-3 px-3'>
        <div className='w-3/4  '>
          <SearchStock setSearch={setFilter} />
        </div>
        <div className='w-1/4 pt-8'>
          <button className="btn btn-accent " onClick={() => { setAddStockModalOpen(true) }}>Add Stock</button>
          <AddStockModal onClose={() => { setAddStockModalOpen(false) }} isOpen={isAddStockModalOpen} onSubmit={onSubmit} />
        </div>
      </div>
      <StockTable filter={filter} refresh={refresh} onStockDelete={onDelete} stocks={stocks} />

    </>
  )
}

export default StockPage