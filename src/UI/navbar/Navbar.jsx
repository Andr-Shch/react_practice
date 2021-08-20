import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/conIndex';
import MyButton from '../myButton/myButton';

const Navbar = () => {
    const{isAuth, setIsAuth} = useContext(AuthContext)
    
    const logOut = () =>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
   
    return (
      <div className='navbar'>
       
       <div className='nav_link'>
          <Link to='/posts'>Posts</Link>
        </div>
    
        <div className='nav_link'>
          <Link to='/about'>About</Link>
        </div>
        
        <MyButton onClick={logOut}>Log Out</MyButton>
       </div>
    );
};

export default Navbar;