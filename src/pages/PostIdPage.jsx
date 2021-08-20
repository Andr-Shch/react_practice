import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/postService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/Loader/Loader';


const PostIdPage = () => {
   
   const params = useParams()
  const [post, setPost] = useState({})

  const [fetchPostById, isLoading, error] =  useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
    console.log(response)
})
  
   // console.log(fetchPostById(7));
   useEffect(()=>{
      fetchPostById(params.id)
   }, [])
   

   return (
        <div>
            <h1>Post Page N-{params.id}</h1>
            {isLoading
                 ?<Loader/>
                 :   <div>{post.title}</div>    }

        </div>
    );
};

export default PostIdPage;