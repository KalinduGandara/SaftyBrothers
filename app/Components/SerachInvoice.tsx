import React from 'react'

const SerachInvoice = () => {
  return (
    <div>
       <form >
                <div>
                    <div className="flex flex-row px-3 gap-3 pt-8">
                        <div className='w-1/4'>
                            {/* <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label> */}
                            <input placeholder="Enter PO Number" className="input input-bordered input-primary input-sm w-full max-w-xs " type="text" id='itemCode' name='itemCode' />
                        </div>
                        <div className='w-1/4 '>
                            {/* <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label> */}
                            <input placeholder="Enter Customer Name" className="input input-bordered input-primary input-sm md:xs xl:xl w-full max-w-xs " type="text" id='itemName' name='itemName' />
                        </div>
                        <div className='w-1/4 '>
                            <button className='w-100 btn btn-primary btn-sm btn-md:w-32 btn-lg:w-48'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
    
    </div>
  )
}

export default SerachInvoice
