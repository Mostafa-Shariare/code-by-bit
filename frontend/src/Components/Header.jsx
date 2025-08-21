import React, { useContext } from 'react'
import headerImg from '../assets/mainLogo.png'
import {NavLink} from 'react-router-dom';

import {UsedContext} from './App'

function Header() {

  const { state, dispatch } = useContext(UsedContext);

  const RenderMenu = ()=>{
    if(state){
      return (
        <>
            <NavLink to='/logout'><button className='Headerbtn Headerbtn2 btn'>Logout</button></NavLink>
        </>
      )
    }
    else{
      return(
        <>
          <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
          <NavLink to='/register'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink>
        </>
      )
    }
  }

  return (
    <div className="headerContainer">
        <div className="headerImage">
            <img className='headerlogo' src={headerImg} alt="Main Logo" /><NavLink className='headerp' to='/'>Code By Bit</NavLink>
        </div>
        <div className="Headerbtngroup">
            <RenderMenu/>
        </div> 
    </div>
  )
}

export default Header