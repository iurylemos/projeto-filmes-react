import React, { Component } from 'react'
import './Filme.css'

class Filme extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filme: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url).then((response) => {
      response.json().then((r) => {
        this.setState({ filme: r })
        console.log(r)
      })
    })
  }

  render() {
    return (
      <div className="filme-info">
        <h1> Titulo: {this.state.filme.nome} </h1>
        <img src={this.state.filme.foto} alt='Foto' />
        {
          this.state.filme.length !== 0 &&
          <h3>Sinopse</h3>
        }
        {this.state.filme.sinopse}
      </div>
    )
  }
}

export default Filme