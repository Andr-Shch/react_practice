import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/postService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import stl from '../styles/comments.module.css'

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
        console.log(response)
    })

    const [fetchComents, isComLoading, comError] = useFetching(async (id) => {

        const response = await PostService.getCommentById(id)
        setComment(response.data);
        console.log(response)
    })

    // console.log(fetchPostById(7));
    useEffect(() => {
        fetchPostById(params.id)
        fetchComents(params.id)

    }, [])


    return (
        <div >
            <h1>Post Page N-{params.id}</h1>
            {isLoading
                ? <h1>Waiting for data </h1>
                :  <div className='post'>
                <div className='post__content'>
                    <strong>{post.id}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                    
                </div>
      
                
                 
              </div>
}

            
            {isComLoading
                ? <Loader />
                : <div className={stl.section}>
                      <h2>
                        Comments.....
                      </h2>
                    {comment.map(com =>
                        <div key={com.id} style={{ marginTop: 15 }} className={stl.comment_box}>
                           <div className={stl.autor}>{com.email} <span className={stl.spn}>autor</span> </div>
                            <div className={stl.content}>{com.body}</div>
                        </div>
                    )}
                </div>

            }
        </div>
    );
};

export default PostIdPage;