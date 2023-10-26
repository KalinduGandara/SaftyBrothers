import React from 'react'
import CustomerDetailsTable from '../Components/CustomerDetailsTable'

function customer() {
  return (
    <>
    <div className=' pt-5 ' >
    <div className='bg-primary text-center text-4xl top-10 font-black w-full rounded '>PURCHACE ORDER</div>
        </div>


        <div className=" flex flex-row pt-5 px-3">
        <div className='w-3/12 space-x-3'><input type="text" placeholder="Company Name" className="input input-sm input-bordered input-primary w-full max-w-xs " />
            </div>
       <div  className='w-3/12'>
       <input type="text" placeholder="Customer Name" className="input input-bordered input-sm input-primary w-full max-w-xs" />
       </div>
       <div  className='w-1/12'>
       <button className='w-100 btn btn-sm btn-primary'>Search</button>
       </div>
       <div  className='pl-24 w-5/12'>
       <button className="btn btn-accent ">Add Customer Details</button>
         </div>
      
       
       
        

      

       </div>
       <div className='flex flex-row pt-5 px-3'>
        <div className='w-full'><CustomerDetailsTable/></div>
       </div>
             </>
  )
}

export default customer