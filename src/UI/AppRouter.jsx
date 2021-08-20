import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Post from '../pages/Pages';
import PostIdPage from '../pages/PostIdPage';
import Navbar from './navbar/Navbar';

const AppRouter = () => {
    return (
        <div className="App">
        <Navbar />
        <Switch>
          <Route  path='/about'>
            <About />
          </Route>
          <Route exact path='/posts'>
            <Post />
          </Route>
          <Route exact path='/posts/:id'>
            <PostIdPage/>
          </Route>
          <Redirect to='/about'/>
        </Switch>
        </div>
    );
};

export default AppRouter;