import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './view/Home';
import Header from './components/Header'
import Erro from './view/Erro'
import Filme from './view/Filme';
import Painel from './view/Painel';
import { autenticado } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    autenticado() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
  )} />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/painel" component={Painel} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes