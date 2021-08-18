import React from 'react';
import stl from './modalStyle.module.css'

const MyModal = ({children, visible, setVisible}) => {
    
    const rootClass=[stl.myModal]
      if(visible){
          rootClass.push(stl.active)
      }
    return (
        <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={stl.myModalCont} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;