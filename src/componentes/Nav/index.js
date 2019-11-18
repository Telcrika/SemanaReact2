import React from 'react'
import Logo from '../../imagens/RocketChat.png'
import './styles.css'
import Menu from './Menu'

function Nav () {
    return (
        <nav className='navbar'>
            <img src={Logo} alt='Logotipo do Rockchat'
            className='navbar-logotipo'


        />
        <Menu />
        </nav>
        
    )
}

export default Nav;