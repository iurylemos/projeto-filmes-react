import React, { Component } from 'react';
import './Header.css';
import { HeaderStyled } from '../../styles'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Link to="/">Home</Link>
      </HeaderStyled>
    )
  }
}

export default Header