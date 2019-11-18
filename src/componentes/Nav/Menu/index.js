import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state  = {
            aberto: false
        }
    }


    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto} //usar o sinal de exclamação torna o contrário nossa afirmação
        })
    }
    render () {
        let classeDasOpcoes = 'navbar-menu__opcoes'
        let classeDoBotao = 'navbar-menu__botao'

        if(this.state.aberto) {
            classeDasOpcoes += 'navbar-menu__opcoes--aberto' //concatenando..
            classeDoBotao += 'navbar-menu__botao--aberto'
        }
        return (
            <div className='nav-menu navbar-links'>
                <span className={classeDoBotao} onClick={this.handleAbreOuFecha}>
                Menu
                </span>
                <ul className={classeDasOpcoes}>
                    <li>
                    <Link to='/home' className='navbar-links__ativo'>
                    Home
                    </Link>
                    </li>

                    <li>
                    <Link to='/contato' className='navbar-links__ativo'>
                    Contato
                    </Link>
                    </li>

                    <li>
                    <Link to='/mensagem' className='navbar-links__ativo'>
                    Mensagem
                    </Link>
                    </li>

                </ul>
            </div>
        )
        
    }
}

export default Menu
   