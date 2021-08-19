import React, {   useEffect, useState } from "react";
import './styles/styles.css'
import PostList from "./components/postLIst";
import PostForm from "./components/PostForm";

import PostFilter from "./components/postFilter";
import MyModal from "./UI/myNodal/myModal";
import MyButton from "./UI/myButton/myButton";
import { usePost } from "./hooks/usePost";
import axios from "axios";
import PostService from "./API/postService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";


function App() {
    const [posts, setPosts] = useState([  ])
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal]=useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostLanding, postError]= useFetching( async()=>{
    
      const respons = await PostService.getAll(limit, page)
      setPosts(respons.data)
      console.log(respons.headers['x-total-count']);
      setTotalCount(respons.headers['x-total-count'])
    })

    const sortedAndSearcgedPost = usePost(posts, filter.sort, filter.query)
    
 
    
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
     
       {postError&&<h1>Errorrrr.......</h1>} 
        {isPostLanding
          ? <Loader/>
          : <PostList remove={removePost} posts={sortedAndSearcgedPost} title='Post List'/>
        }
      

    </div>
  )
}

export default App;
