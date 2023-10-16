import React from 'react'

function SearchStock() {
    return (
        <>

<form >
                <div>
                    <div className="flex flex-row px-3 pt-10">
                        <div className='w-4/12 space-x-3'>
                            {/* <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label> */}
                            <input placeholder="Enter Item Code" className="input input-bordered input-primary w-full max-w-xs " type="text" id='itemCode' name='itemCode' />
                        </div>
                        <div className='w-4/12 '>
                            {/* <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label> */}
                            <input placeholder="Enter Item Code" className="input input-bordered input-primary w-full max-w-xs " type="text" id='itemName' name='itemName' />
                        </div>
                        <div className='w-4/12 '>
                            <button className='w-100 btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
            {/* <form >
                <div>
                    <div className="join">
                        <div className='join-item mx-3'>
                            <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" id='itemCode' name='itemCode' />
                        </div>
                        <div className='join-item mx-3'>
                            <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" id='itemName' name='itemName' />
                        </div>
                        <div className='join-item mx-3 pt-9'>
                            <button className='w-100 btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
            </form> */}
            {/* <form >
                <div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className='w-full md:w-2/5 px-3 mb-6 md:mb-0'>
                            <label className="label" htmlFor="itemCode"><span className="label-text">Item Code</span> </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" id='itemCode' name='itemCode' />
                        </div>
                        <div className='w-full md:w-2/5 px-3 mb-6 md:mb-0'>
                            <label className="label" htmlFor="itemName"><span className="label-text">Item Name</span> </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" id='itemName' name='itemName' />
                        </div>
                        <div className='w-full md:w-1/5 px-3 mb-6 md:mb-0'>
                            <button className='w-100 btn btn-primary mt-5'>Search</button>
                        </div>
                    </div>
                </div>
            </form> */}
        </>
    )
}

export default SearchStock