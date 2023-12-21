import React from 'react'
import InvoiceandQoatTable from '../Components/InvoiceandQuoatTable';
import SearchStock from '../Components/SearchStock';
import Link from 'next/link'


const companydetails = [
  'SAFETY BROTHERS HODLDINGS',
  'No - 259/41 Bandaranayakapura',
  'Hot Line :- +94760120290',
  'Telephone :- +94 0760120291',
  'Email :- brotherssafety@gmail.com'
];

function invoice() {

  return (
    <>
      <div className=' pt-5 ' >
        <div className='bg-primary text-center text-4xl top-10 font-black w-full rounded '>PURCHACE ORDER</div>
      </div>


      <div className=" flex flex-row pt-5 px-3">
        <div className='w-6/12 space-x-3'>
          {/* <input type="text" placeholder="Enter Item Name" className="input input-sm input-bordered input-primary w-full max-w-xs" /> */}
          <SearchStock />
        </div>
        <div className='w-1/12'>
          {/* <button className='w-100 btn btn-primary'>Search</button> */}
        </div>
        <div className='pl-24 w-5/12'>
          {companydetails.map((detail, index) => (

            <li className='font-black' key={index}>{detail}</li>

          ))}</div>



      </div>
      <div className='flex flex-row gap-3 px-3 pt-3'>
        <div className=' w-3/12'>
          <button className="btn glass btn-sm  btn-primary bg-black">Glows<button ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></button>
        </div>
        <div className=' w-3/12'>
          <button className='btn btn-circle  btn-md'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#86198f" className="w-22">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>

          </button>
        </div>
        <div className='w-3/12 space-y-3'>
          <input type="text" placeholder="PO Number" className="input input-bordered input-sm input-primary w-full max-w-xs" />
          <input type="text" placeholder="Customer Name" className="input input-bordered input-sm input-primary w-full max-w-xs" />
          <input type="text" placeholder="Customer Email" className="input input-bordered input-sm input-primary w-full max-w-xs" />

          <select className="select select-primary  select-sm w-full max-w-xs">
            <option disabled selected>Payment Method</option>
            <option>Cash</option>
            <option>Cheque</option>
            <option>Online</option>
            <option>Credit</option>
          </select>
        </div>
        <div className='w-3/12 space-y-3'>
          <input type="text" placeholder="Company Name" className="input input-bordered input-sm input-primary w-full max-w-xs" />
          <input type="text" placeholder="Telephone Number" className="input input-bordered input-sm  input-primary w-full max-w-xs" />
          <input type="text" placeholder="Customer Address" className="input input-bordered input-sm input-primary w-full max-w-xs" />
          <button className="btn btn-accent">Save Customer Details</button>
        </div>




      </div>
      <div className='flex flex-row gap-3 px-3 pt-3'>
        <div className='w-3/12 space-y-3'>
          <Link href="/invoicereport" >
            <button className="btn btn-accent" >INVOICE REPORT</button>
          </Link>
        </div>

      </div>
      <div className='flex flex-row gap-3 px-3 pt-3'>
        <div className='w-full px-3'><InvoiceandQoatTable /></div>
      </div>

    </>
  )
}

export default invoice