import React from 'react'


const companydetails = [
    'SAFETY BROTHERS HODLDINGS',
    'No - 259/41 Bandaranayakapura',
    'Hot Line :- +94760120290',
    'Telephone :- +94 0760120291',
    'Email :- brotherssafety@gmail.com'
  ];
  
function QuotationPage() {

    return (
        <>
        <div className=' pt-5 ' >
        <div className='bg-primary text-center text-4xl top-10 font-black  text-white w-full rounded '>QUOTATION</div>
            </div>
   
   
            <div className=" flex flex-row pt-5 px-3">
            <div className='w-3/12 space-x-3'><input type="text" placeholder="Enter Item Code" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
           <div  className='w-3/12'>
           <input type="text" placeholder="Enter Item Name" className="input input-bordered input-primary w-full max-w-xs" />
           </div>
           <div  className='w-1/12'>
           <button className='w-100 btn btn-primary'>Search</button>
           </div>
           <div  className='pl-24 w-5/12'>
             {companydetails.map((detail, index) => (
            
                 <li className='font-black' key={index}>{detail}</li>
            
          ))}</div>
          
           
           
            </div>
            <div className='flex flex-row px-3 pt-3'> 
            <div className=' w-3/12'>
           <button className="btn glass btn-primary bg-black">Glows<button ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></button>
            </div>
            <div className=' w-3/12'>
            <button className="btn btn-accent btn-circle"><h3 className='text-4xl align-middle'>+</h3></button>
            </div>
            <div  className='w-3/12 space-x-3'>
           <input type="text" placeholder="Enter Item Name" className="input input-bordered input-primary w-full max-w-xs" />
           </div>
           <div  className='w-3/12'>
           <input type="text" placeholder="Enter Item Name" className="input input-bordered input-primary w-full max-w-xs" />
           </div>
           

            </div> 
                 </>
    )
}

export default QuotationPage