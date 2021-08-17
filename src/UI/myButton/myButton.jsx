import React from 'react';
import sheet from './myBTN.module.css'


const MyButton = ({children, ...props}) => {
  
    return(
        <button {...props} className={sheet.myBtn}>
          {children}
        </button>
    )
}

export default MyButton