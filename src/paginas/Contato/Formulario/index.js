import React from 'react'
import CaixaTexto from './CaixaTexto'
import Grupo from './Grupo'


class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            nome: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            país: {
                valor: '',
                erro: ''
            },
            mensagem: {
                valor: '',
                erro: ''
            }
        }
    }

    handleChange = (nomeDoCampo, valorDoCampo, erroDoCampo = '') => {
        console.log('handleChange',nomeDoCampo,valorDoCampo,erroDoCampo);
        this.state({
            [nomeDoCampo]: {
                valor: valorDoCampo,
                erro: erroDoCampo
            }
        })
    }
    
    render () {
        console.log(this.setState);
        
        return (
            <div className='pagina'>
                <h2>Entre em contato conosco!</h2>
                <form className='formulario'>
                    
                    <Grupo erro={this.nome.erro} >
                        <Grupo.Legenda htmlFor='nome'>Nome Completo</Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='nome'
                            placeholder='Digite seu nome'
                            mudaEstado={this.handleChange}
                        />
                    </Grupo>

                    <Grupo erro={this.email.erro} >
                        <Grupo.Legenda htmlFor='email'>Digite seu email</Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='email'
                            placeholder='Digite seu email'
                            mudaEstado={this.handleChange}
                            required
                        />
                    </Grupo>

                    <Grupo erro={this.pais.erro} >
                        <Grupo.Legenda htmlFor='pais'>Pais</Grupo.Legenda>    
                        <Grupo.CaixaTexto
                            name='pais'
                            placeholder='Digite seu pais'
                            mudaEstado={this.handleChange}
                            required
                        />
                    </Grupo>

                    <Grupo erro={this.comentario.erro} >
                        <Grupo.Legenda htmlFor='comentario'>Mensagem</Grupo.Legenda>    
                        <Grupo.CaixaTexto
                            name='comentário'
                            placeholder='Digite seu comentário'
                            mudaEstado={this.handleChange}
                        />
                    </Grupo>    
                    
                </form>
            </div>
           

        )
    }
    

       
}

export default Formulario
