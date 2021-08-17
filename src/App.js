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
  
    const [post, setPost] = useState({title:'',body:''}) 
  //  const [body, setBody] = useState('') 

    const addNewPost= (e) =>{
       e.preventDefault()
     
        setPosts([...posts, {...post, id:Date.now()}]);
        setPost({title:'',body:''}) 
    }

  
   return (
     <div className="App">
      <form>
      
       <MyInput 
        value={post.title}
        onChange={e=>setPost({...post, title:e.target.value})}
        type='text' 
        placeholder='Post header' />
        
       <MyInput 
        value={post.body}
        onChange={e=>setPost({...post, body:e.target.value})}
        type='text' 
        placeholder='Post text'/>
        
      <MyButton onClick={addNewPost} >Add Post</MyButton>
      
      </form>
     <PostList posts={posts} title='Post List'/>
     
    </div>
  )
}

export default App;
