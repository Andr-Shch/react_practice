import React, { useState } from "react";
import MyButton from "../UI/myButton/myButton";
import MyInput from "../UI/input/input";


const PostForm=({create})=>{

    const [post, setPost] = useState({title:'',body:''}) 

    const addNewPost= (e) =>{
        e.preventDefault()
          const newPost = {
              ...post, id: Date.now()
          }
          create(newPost)
         //setPosts([...posts, {...post, id:Date.now()}]);
         setPost({title:'',body:''}) 
     }
 

    return(
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
    )
  

}

export default PostForm