import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Post from '../pages/Pages';
import PostIdPage from '../pages/PostIdPage';
import { privateRoute, publicRoute, route } from '../router/rout';
import Navbar from './navbar/Navbar';

const AppRouter = () => {
  const isAuth = false;

    return (
        isAuth
        ? <div className="App">
        <Navbar />
        <Switch>
          {privateRoute.map(route=>
              <Route 
                  component={route.component} 
                  path={route.path} 
                  exact={route.exect} />

          )}
          
       
          
          <Redirect to='/about'/>
        </Switch>
        </div>
       
       :<div className="App">
        <Navbar />
        <Switch>
         
          
            {  publicRoute.map(route=>
              <Route 
                  component={route.component} 
                  path={route.path} 
                  exact={route.exect} />

          )}
          
          <Redirect to='/login'/>
        </Switch>
        </div>
        
       
    );
};

export default AppRouter;