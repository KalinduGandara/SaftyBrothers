import React from 'react'

function LoadingSpinner() {
    return (
        <>
            {/* center to middle */}
            <div className="flex items-center justify-center bg-opacity-75 m-9">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    )
}

export default LoadingSpinner