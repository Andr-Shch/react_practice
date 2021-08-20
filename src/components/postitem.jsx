import React from "react";
import { useHistory } from "react-router-dom";


const PostItem = (props) => {
   let router = useHistory()
 
    return (
        <div className='post'>
          <div className='post__content'>
              <strong>{props.post.id}. {props.post.title}</strong>
              <div>
                  {props.post.body}
              </div>
              
          </div>

          <div className='post__btn open'>
              <button onClick={()=>router.push(`/posts/${props.post.id}`)}>Open</button>
          </div>
         
          <div className='post__btn'>
              <button onClick={()=>props.remove(props.post)}>Delete</button>
          </div>
           
        </div>
      
    )
}

export default PostItem