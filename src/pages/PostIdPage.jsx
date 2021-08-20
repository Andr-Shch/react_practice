import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/postService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/Loader/Loader';


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
        <div>
            <h1>Post Page N-{params.id}</h1>
            {isLoading
                ? <h1>Waiting for data </h1>
                : <div>{post.title}</div>}

            
            {isComLoading
                ? <Loader />
                : <div>
                      <h2>
                        Comments.....
                      </h2>
                    {comment.map(com =>
                        <div style={{ marginTop: 15 }}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>

            }
        </div>
    );
};

export default PostIdPage;