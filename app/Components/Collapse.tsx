import React, { useState } from 'react'

interface Props {
    children: React.ReactNode,
    buttonText: string
}

function Collapse({ children, buttonText }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {buttonText}
            </button>
            {isCollapsed && children}
        </>
    )
}

export default Collapse
