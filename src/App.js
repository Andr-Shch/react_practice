import React, {  useState } from "react";
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
    const [selectedSort, setSlectedSort] = useState('')

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost= (post) => {
       setPosts(posts.filter(p=>p.id !== post.id))
    }
    
    const sortPost = (sort) =>{
         setSlectedSort(sort)
         setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
         console.log(sort)
    }
  
  
   return (
     <div className="App">
      
      <PostForm create={createPost}/>

        <hr style={{margin:'15px'}}/>
      
        <div>
           
           <MyInput />

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
     
       {  posts.length!==0
            ?<PostList remove={removePost} posts={posts} title='Post List'/>
          
            :<div style={{textAlign:'center'}}>No posts</div>
       }
    
     
    </div>
  )
}

export default App;
