import React from 'react';
import { getPageArray } from '../../utils/page';

const Pagination = ({totalPages, page, changePage}) => {
 
    let pageArray = getPageArray(totalPages)
 
    return (
        <div>
             {pageArray.map(p=>{
        return    <button
                    onClick={()=>changePage(p)}
                    key={p}
                    className={page=== p?'curent_page':'non'}>
                   {p}
                  </button>
        })}
        </div>
    );
};

export default Pagination;