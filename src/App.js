import React, { useEffect, useState } from "react";
import './styles/styles.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./UI/AppRouter";
import { AuthContext } from "./context/conIndex";



function App() {
  const [isAuth, setIsAuth] = useState(false)
 
 useEffect(()=>{
   if(localStorage.getItem('auth'))
     setIsAuth(true)
 }, [])

  return (
     


     <AuthContext.Provider value={ {
       isAuth,
       setIsAuth}  
     }>
      <BrowserRouter>
         <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
   
    
  )
}

export default App;
