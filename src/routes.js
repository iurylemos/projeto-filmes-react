import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Header from './components/Header'
import Erro from './view/Erro'
import Filme from './view/Filme';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes