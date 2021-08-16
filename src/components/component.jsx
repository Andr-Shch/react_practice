import React, { useState } from 'react';

const Counter = ()=>{

    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('')
    const increment =()=>{
        setLikes(likes+1)
    }
    
    const decrement = ()=>{
     setLikes(likes-1)
    }

    return(
      <div>
           <h5>Press buttons: {likes}</h5>
      <h4>Your text: {value}</h4>
      <input 
      type='text' 
      value={value} 
      onChange={event => setValue(event.target.value)}/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    
    )
}

export default Counter