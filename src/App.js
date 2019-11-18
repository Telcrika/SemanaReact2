import React from 'react';
import { Switch, Route} from 'react-router-dom' //o route cria uma rota para o fluxo de páginas
import PaginaInicial from './paginas/PaginaInicial';
import Nav from './componentes/Nav'
import Menu from './componentes/Nav/index'

import './App.css';
import Contato from './paginas/Contato';
import Home from './paginas/Home';
import Mensagem from './paginas/Mensagem';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={PaginaInicial} />
        <Route exact path='/contato' component={Contato} />
        <Route exact path='/home' component={PaginaInicial} />
        <Route exact path='/mensagem' component={Mensagem} />
      </Switch>
    </div>
  );
}

export default App;
