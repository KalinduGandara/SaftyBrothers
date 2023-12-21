import React from 'react'

interface Props {
    setSearch: (search: string) => void
}
function SearchStock({ setSearch }: Props) {
    return (
        <>
            <div>
                <div className="flex flex-row px-3 gap-3 pt-8">
                    <div className='w-1/4 '>
                        <input onChange={(e) => { setSearch(e.target.value) }} placeholder="Enter Search" className="input input-bordered input-primary input-sm md:xs xl:xl w-full max-w-xs " type="text" id='itemName' name='itemName' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchStock