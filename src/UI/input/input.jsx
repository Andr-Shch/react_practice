import React from 'react';
import sheet from './input.module.css'


const MyInput = (props) => {
  
    return(
        <input  {...props} className={sheet.myInp}  />
     
    )
}

export default MyInput