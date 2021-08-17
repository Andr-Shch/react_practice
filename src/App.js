import React, {  useMemo, useState } from "react";
import './styles/styles.css'
import PostList from "./components/postLIst";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/mySelector";
import MyInput from "./UI/input/input";


function App() {
    const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', body: 'Javascript is programming language'},
      {id:2, title:'Python', body: 'Python is an interpreted high-level general-purpose programming language.'},
      {id:3, title:'Java', body: '1'},
      {id:4, title:'2Go', body: '2'},
    ])
    ///////////////////////////////////////////////////////
    const [selectedSort, setSlectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPost = useMemo(()=>{ 
      console.log('get done')
    if(selectedSort){
     return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
     }, [selectedSort, posts])
    
     const sortedAndSearcgedPost = useMemo(()=>{
       return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
     },[searchQuery, sortedPost  ])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost= (post) => {
       setPosts(posts.filter(p=>p.id !== post.id))
    }
    
    const sortPost = (sort) =>{
         setSlectedSort(sort)
         console.log(sort)
    }
  
  ////////////////////////////////////////////////////////////////////////////////////////////
   return (
     <div className="App">
      
      <PostForm create={createPost}/>

        <hr style={{margin:'15px'}}/>
      
        <div>
           
           <MyInput 
         
          value={searchQuery}
          onChange={e=>setSearchQuery(e.target.value)}
          placeholder='Serarch for....' />

          <MySelect 
            value={selectedSort}
            onChange={sortPost}
            defaultValue='Sort:'
            options={[
              {value:'title', name: 'by Title'},
              {value:'body', name: 'by body'}
            ]}
          />
        
        </div>
     
       {  sortedAndSearcgedPost.length
            ?<PostList remove={removePost} posts={sortedAndSearcgedPost} title='Post List'/>
          
            :<h1 style={{textAlign:'center'}}>No posts</h1>
       }
    
     
    </div>
  )
}

export default App;
