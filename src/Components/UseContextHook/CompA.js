import React, { useContext, useState } from 'react'
import CompB from './CompB'

export const context = React.createContext()

const CompA = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h2>CompA</h2>
            <context.Provider value={count}>
                <CompB  />
            </context.Provider>
        </>
    )
}

export default CompA