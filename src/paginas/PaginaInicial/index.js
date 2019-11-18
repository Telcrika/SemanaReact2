//cada componente tem seu próprio index.
import React from 'react'

import Header from '../../componentes/Header'

//quando não há necessidade de interação com o usuário a págimna não precisa ser uma classe, ela pode ser uma function
function PaginaInicial () {
    return (
        <main>
            <Header />
        </main>
    )
}

export default PaginaInicial