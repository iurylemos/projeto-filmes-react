import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { ContainerStyled, ListaFilmesStyled, ListaFilmes } from '../../styles';
import { HashLink } from 'react-router-hash-link';
import Inicio from '../Inicio';
import Sobre from '../Sobre';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: []
    }

    this.loadFilmes = this.loadFilmes.bind(this)
  }

  componentDidMount() {
    this.loadFilmes()
  }

  loadFilmes() {
    //URL da API: https://sujeitoprogramador.com/r-api/?api=filmes/
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url).then((r) => {
      r.json().then((json) => {
        this.setState({ filmes: json })
        console.log(json)
      })
    })
  }

  render() {
    return (
      <ContainerStyled largura={900}>
        <Inicio />
        <Sobre />
        <ListaFilmesStyled>
          {
            this.state.filmes.map((item) => {
              return (
                <ListaFilmes id={item.id} key={item.id}>
                  <strong>{item.nome}</strong>
                  <img src={item.foto} alt="Capa" />
                  <Link to={`filme/${item.id}`}>Acessar</Link>
                </ListaFilmes>
              )
            })
          }
        </ListaFilmesStyled>
        <HashLink smooth to='#inicio'> Inicio </HashLink>
      </ContainerStyled>
    )
  }
}

export default Home