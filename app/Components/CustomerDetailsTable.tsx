import React from 'react'

const CustomerDetailsTable = () => {
  return (
    <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-info" />
                                </label>
                            </th>
                            <th className='text-xl'>Company name</th>
                            <th className='text-xl'>Customer Name</th>
                            <th className='text-xl'>Customer Email</th>
                            <th className='text-xl'>Phone Number</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                <div>Toyota</div>
                                        
                                    
                                </td>
                                <td>
                                   <div>Prabath</div>
                                </td>
                                <td>
                                    <div>prabath@toyota.lk</div>
                                </td>
                                <td>
                                    0774488552
                                </td>

                                <td>
                                <button className="btn btn-sm  btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                      


                    </tbody>
                </table>
            </div>
  )
}

export default CustomerDetailsTable
