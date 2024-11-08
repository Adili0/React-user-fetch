import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
    <header>
    <a href='' className='logo'>My Logo</a>
      <nav>
        
      <NavLink to='/'>Home</NavLink>
      <NavLink to='user'>Users</NavLink>
      
     
      <NavLink to='login'>Signout</NavLink>
    
      

    
      </nav>
    </header>
      
    </>
  )
}

export default Header
