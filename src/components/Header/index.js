import React, { Component } from 'react';
import './Header.css';
import { HeaderStyled } from '../../styles'
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <div id="home">
          <nav>
            <ul>
              <li><Link smooth to="#home">Home</Link></li>
              <li><Link smooth to="#sobre">Sobre</Link></li>
              <li><Link smooth to="#700">Filme</Link></li>
            </ul>
          </nav>
        </div>
      </HeaderStyled>
    )
  }
}

export default Header