import React, { Component } from 'react';
import Routes from './routes';
import { AppStyled } from './styles';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Routes />
      </AppStyled>
    )
  }
}


export default App;
