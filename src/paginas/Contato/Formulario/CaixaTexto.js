import React from 'react'

function CaixaTexto (props) {

    function validaCampo (evento) {
        const { value } = evento.target
        if(props.required && evento.target.value.trim() === ''){

        }
        console.log(evento.target.name);
        console.log(evento.target.value);
        
        
    }
    return (
        <input
        name={props.name}
        type='text'
        className='campo'
        placeholder={props.placeholder}
        onChange={validaCampo}
        />
    )


}



// class CaixaTexto extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             nome: ''
//         }
//     }

//     handleChange = (evento) => { //aonde acontecem as validações
//         this.setState({
//             nome: evento.target.value
//         })
//     }

//     render() {
//         return (
//             <input
//             className='campo'
//             type='text'
//             name='nome'
//             placeholder='Digite seu nome'
//             onChange ={this.handleChange}
//             value ={this.value}
//             />
//         )
//     }

// }

export default CaixaTexto