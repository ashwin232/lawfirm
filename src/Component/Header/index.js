 import React from 'react'
 import Nav from '../Navb';
 import logo from '../../Assets/IGstudio.png'
 import './header.css'

const Header = () => {
  return (
    <header className='head'>
        <img src={logo} alt='logo' className='logo'/>
        <Nav/>
        <button>Contact Me</button>
    </header>
  )
}

export default Header;