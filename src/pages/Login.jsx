import React from 'react';
import MyInput from '../UI/input/input';

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <form >
               
               
                <input type="text" placeholder='Login'/>
                <input type="password" placeholder='Password'/>
                 <button>Enter</button>
            </form>
        </div>
    );
};

export default Login;