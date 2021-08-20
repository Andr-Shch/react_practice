import React, { useContext } from 'react';
import { AuthContext } from '../context/conIndex';
import MyButton from '../UI/myButton/myButton';

const Login = () => {
    
    const{isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
      
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
  
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login} >
               
               
                <input type="text" placeholder='Login'/>
                <input type="password" placeholder='Password'/>
                  <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;