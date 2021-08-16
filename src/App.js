import React, { useState } from "react";
import CounterClass from "./components/classCounter";
import Counter from "./components/component";
import PostItem from "./components/postitem";
import './styles/styles.css'


function App() {
    const [post, setPost] = useState([
      {id:1, title:'JavaScript', body: 'Javascript is programing language'},
      {id:2, title:'JavaScript2', body: 'Javascript is programing language'},
      {id:3, title:'JavaScript3', body: 'Javascript is programing language'},
      {id:4, title:'JavaScript4', body: 'Javascript is programing language'},
    ])
    
  return (
    <div className="App">
     <Counter/>
     <hr/>
     <CounterClass/>
     {post.map(post=>
        <PostItem post={post} key={post.id} />
     )}
     
    </div>
  );
}

export default App;
