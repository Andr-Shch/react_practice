import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context/conIndex';

import { privateRoute, publicRoute} from '../router/rout';
import Loader from './Loader/Loader';
import Navbar from './navbar/Navbar';

const AppRouter = () => {
    const{isAuth, loading} = useContext(AuthContext)
    console.log(isAuth);

  if(loading){
    return <Loader/>
  }

    return (
        isAuth
        ? <div className="App">
        <Navbar />
        <Switch>
          {privateRoute.map(route=>
              <Route 
                  component={route.component} 
                  path={route.path} 
                  exact={route.exect}
                  key={route.path}
                  />
                  
          )}
          
       
          
          <Redirect to='/posts'/>
        </Switch>
        </div>
       
       :<div className="App">
        <Navbar />
        <Switch>
         
          
            {  publicRoute.map(route=>
              <Route 
                  component={route.component} 
                  path={route.path} 
                  exact={route.exect} 
                  key={route.path}
                  />

          )}
          
          <Redirect to='/login'/>
        </Switch>
        </div>
        
       
    );
};

export default AppRouter;