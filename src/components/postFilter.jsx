import React from 'react';
import MyInput from '../UI/input/input';
import MySelect from "../UI/select/mySelector";

const PostFilter = ({filter, setFilter }) => {
    return (
        <div>
         <hr style={{margin:'15px'}}/>
      
      
         
         <MyInput 
       
        value={filter.query}
        onChange={e=>setFilter({...filter, query:e.target.value})}
        placeholder='Serarch for....' />

        <MySelect 
          value={filter.sort }
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Sort:'
          options={[
            {value:'title', name: 'by Title'},
            {value:'body', name: 'by body'}
          ]}
        />
      
      
        </div>
    );
};

export default PostFilter;