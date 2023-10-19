import React from 'react'

function LoadingFullScreenSpinner() {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-white bg-opacity-75">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    )
}

export default LoadingFullScreenSpinner