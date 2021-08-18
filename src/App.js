import React, {  useMemo, useState } from "react";
import './styles/styles.css'
import PostList from "./components/postLIst";
import PostForm from "./components/PostForm";

import PostFilter from "./components/postFilter";
import MyModal from "./UI/myNodal/myModal";
import MyButton from "./UI/myButton/myButton";


function App() {
    const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', body: 'Javascript is programming language'},
      {id:2, title:'Python', body: 'Python is an interpreted high-level general-purpose programming language.'},
      {id:3, title:'Java', body: '1'},
      {id:4, title:'2Go', body: '2'},
    ])
    ///////////////////////////////////////////////////////
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal]=useState(false)

    const sortedPost = useMemo(()=>{ 
      console.log('get done')
    if(filter.sort){
     return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
     }, [filter.sort, posts])
    
     const sortedAndSearcgedPost = useMemo(()=>{
       return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
     },[filter.query, sortedPost  ])

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
