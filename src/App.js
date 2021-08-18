import React, {   useEffect, useState } from "react";
import './styles/styles.css'
import PostList from "./components/postLIst";
import PostForm from "./components/PostForm";

import PostFilter from "./components/postFilter";
import MyModal from "./UI/myNodal/myModal";
import MyButton from "./UI/myButton/myButton";
import { usePost } from "./hooks/usePost";
import axios from "axios";


function App() {
    const [posts, setPosts] = useState([  ])
    ///////////////////////////////////////////////////////
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal]=useState(false)
     
    const sortedAndSearcgedPost = usePost(posts, filter.sort, filter.query)
    
    async function fetchPosts(){
      const respons = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(respons.data)
    }
    
    useEffect(()=>{
      fetchPosts()
    }, [] )


    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }

    const removePost= (post) => {
       setPosts(posts.filter(p=>p.id !== post.id))
    }
    
  
  
  //////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   return (
     <div className="App">
           
         <MyButton onClick={()=> { setModal(true)}}>
              Create post
         </MyButton>

       <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
       </MyModal>
       
       
            
       <PostFilter filter={filter} setFilter={setFilter} />
     
       <PostList remove={removePost} posts={sortedAndSearcgedPost} title='Post List'/>

    </div>
  )
}

export default App;
