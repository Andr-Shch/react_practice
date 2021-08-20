import About from "../pages/about";
import Login from "../pages/Login";
import Post from "../pages/Pages";
import PostIdPage from "../pages/PostIdPage";


export const privateRoute = [
    {path:'/about', component: About, exect:false },
    {path:'/posts', component: Post, exect:true },
    {path:'/posts/:id', component: PostIdPage, exect:true }
]

export const publicRoute = [
    {path:'/login', component: Login, exect:false }
]