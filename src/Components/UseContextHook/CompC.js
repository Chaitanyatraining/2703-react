import React from 'react'
import { context } from './CompA'

const CompC = () => {
  return (
    <>
        <h2>CompC</h2>
        <context.Consumer>
            {(value) => value}
        </context.Consumer>
    </>
  )
}

export default CompC