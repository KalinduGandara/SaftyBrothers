"use client";
import React, { useEffect, useState } from 'react'
import QuoatTable from '../Components/QuoatTable';
import SearchStock from '../Components/SearchStock';
import { QuotationStock } from '../quotation/QuotationStock'
import { QuotationCustomer } from '../customer/Customer';

import companydetails from '../Constans/company';

function QuotationPage() {
  const [stocks, setStocks] = useState<QuotationStock[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedStocks, setSelectedStocks] = useState<QuotationStock[]>([]);

  const [customer, setCustomer] = useState<QuotationCustomer>({ companyName: '', address: '', phone: '', customerName: '', date: '', quotationNumber: '', email: '', paymentMethod: '', validDate: '' });
  useEffect(() => {
    fetch('api/stock')
      .then(res => res.json())
      .then(data => setStocks(data))
      .catch(err => console.log(err))
  }, [])

  const onItemAdd = (stock: QuotationStock) => {
    setSelectedStocks([...selectedStocks, { ...stock, index: selectedStocks.length + 1, discount: 0, quantity: 0, unitPrice: 0 }]);
  }
  const onItemRemove = (stock: QuotationStock) => {
    setSelectedStocks([...selectedStocks.filter(s => s.index !== stock.index)]);
  }
  const onItemUpdate = (stock: QuotationStock) => {
    setSelectedStocks(selectedStocks.map(s => s.index === stock.index ? stock : s));
  }
  return (
    <>
      <div className=' pt-5 ' >
        <div className='bg-primary text-center text-4xl top-10 font-black  text-white w-full rounded '>QUOTATION</div>
      </div>
      <div className=" flex flex-row pt-5 px-3">
        <div className='w-6/12 space-x-3'>
          <SearchStock setSearch={setSearch} />
        </div>
        <div className='pl-24 w-5/12'>
          {companydetails.map((detail, index) => (
            <li className='font-black' key={index}>{detail}</li>
          ))}</div>
      </div>
      <div className='flex flex-row gap-3 px-3 pt-3'>
        <table className="table w-6/12">
          <thead>
            <tr>
              <th className='text-xl'>Item Code</th>
              <th className='text-xl'>Item Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* limit to five items */}
            {stocks.filter(stock => stock.itemName.toLowerCase().includes(search.toLowerCase()) || stock.itemCode.toLowerCase().includes(search.toLowerCase())).slice(0, 5).map((stock, index) => (
              <tr key={index}>
                <td>{stock.itemCode}</td>
                <td>{stock.itemName}</td>
                <td>
                  <button onClick={() => { onItemAdd(stock) }} className="btn btn-primary btn-sm">Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='w-3/12 space-y-3'>
          <input value={customer.quotationNumber} onChange={(e) => { setCustomer({ ...customer, quotationNumber: e.target.value }) }} type="text" placeholder="Quoatation Number" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.phone} onChange={(e) => { setCustomer({ ...customer, phone: e.target.value }) }} type="text" placeholder="Telephone Number" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.address} onChange={(e) => { setCustomer({ ...customer, address: e.target.value }) }} type="text" placeholder="Company Address" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.email} onChange={(e) => { setCustomer({ ...customer, email: e.target.value }) }} type="text" placeholder="Company Email" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <select value={customer.paymentMethod} onChange={(e) => { setCustomer({ ...customer, paymentMethod: e.target.value }) }} className="select select-primary  select-sm w-full max-w-xs">
            <option disabled selected>Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Cheque">Cheque</option>
            <option value="Online">Online</option>
            <option value="Credit">Credit</option>
          </select>
        </div>
        <div className='w-3/12 space-y-3'>
          <input value={customer.companyName} onChange={(e) => { setCustomer({ ...customer, companyName: e.target.value }) }} type="text" placeholder="Company Name" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.customerName} onChange={(e) => { setCustomer({ ...customer, customerName: e.target.value }) }} type="text" placeholder="Customer Name" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.date} onChange={(e) => { setCustomer({ ...customer, date: e.target.value }) }} type="date" placeholder="Date" className="input input-borderd input-sm input-primary w-full max-w-xs" />
          <input value={customer.validDate} onChange={(e) => { setCustomer({ ...customer, validDate: e.target.value }) }} type="number" placeholder="Valid days" className="input input-borderd input-sm input-primary w-full max-w-xs" />
        </div>


      </div>
      <div className='flex flex-row gap-3 px-3 pt-3'>
        <div className='w-full px-3'><QuoatTable customer={customer} onStockUpdate={onItemUpdate} onStockDelete={onItemRemove} stocks={selectedStocks} /></div>
      </div>
    </>
  )
}

export default QuotationPage