import React from 'react';
import { getPageArray } from '../../utils/page';
import stl from './paginStyle.module.css'

const Pagination = ({totalPages, page, changePage}) => {
 
    let pageArray = getPageArray(totalPages)
 
    return (
        <div className={stl.paginationArea}>
             {pageArray.map(p=>{
        return    <button
                    onClick={()=>changePage(p)}
                    key={p}
                    className={page=== p?`${stl.button} ${stl.curent}`:`${stl.button}`}>
                   {p}
                  </button>
        })}
        </div>
    );
};

export default Pagination;