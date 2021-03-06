import { useMemo } from "react"


export const useSortedPost =(posts, sort)=>{
    const sortedPost = useMemo(()=>{ 
      
      if(sort){
       return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
      }
      return posts
       }, [sort, posts])

    return sortedPost   
}

export const usePost = (post, sort, query) => {
    const sortedPost = useSortedPost(post, sort)
    const sortedAndSearcgedPost = useMemo(()=>{
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
      },[query, sortedPost  ])

    return sortedAndSearcgedPost
    
}