import React from 'react'
import './Stylingcss.css'
import HeaderStyle from './Header.module.css'

const Stylings = () => {
    const internalStyle = {
        divStyle:{
            marginTop:'15px',
            color:'gray',
            backgroundColor: "lightblue"
        },
        headStyle:{

        }
    }

  return (
    <div>
        <h2>Stylings</h2>
        {/* 
            Inline stylings
            Internal Styling
            External Styling
            Module Styling
        */}
        <div style={{color:'red', backgroundColor:'yellowgreen'}}>This is Inline Stylings</div>
        <div style={internalStyle.divStyle}>This is Internal Stylings</div>
        <div className='Externaldiv'>This is External Stylings</div>
        <div className={HeaderStyle.moduleHead}>This is Module Stylings</div>
        <button className='btn btn-primary mt-5'>Bootstrap Buttons</button>
    </div>
  )
}

export default Stylings