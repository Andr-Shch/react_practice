import React, { useEffect, useState } from "react";
import './styles/styles.css'
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import AppRouter from "./UI/AppRouter";



function App() {
   
  return (

    
      <BrowserRouter>
         <AppRouter />
      </BrowserRouter>

    
  )
}

export default App;
