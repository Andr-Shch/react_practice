import React, {  useState } from "react";

import './styles/styles.css'
import PostList from "./components/postLIst";
import MyButton from "./UI/myButton/myButton";
import MyInput from "./UI/input/input";


function App() {
    const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', body: 'Javascript is programing language'},
      {id:2, title:'JavaScript2', body: 'Javascript is programing language'},
      {id:3, title:'JavaScript3', body: 'Javascript is programing language'},
      {id:4, title:'JavaScript4', body: 'Javascript is programing language'},
    ])
  
    const [title, setTitle] = useState('') 
    const [body, setBody] = useState('') 

    const addNewPost= (e) =>{
       e.preventDefault()
        const newPost ={
          id: Date.now(),
          title,
          body
        }
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }

  
   return (
     <div className="App">
      <form>
      
       <MyInput 
        value={title}
        onChange={e=>setTitle(e.target.value)}
        type='text' 
        placeholder='Post header' />
        
       <MyInput 
        value={body}
        onChange={e=>setBody(e.target.value)}
        type='text' 
        placeholder='Post text'/>
        
      <MyButton onClick={addNewPost} >Add Post</MyButton>
      
      </form>
     <PostList posts={posts} title='Post List'/>
     
    </div>
  )
}

export default App;
