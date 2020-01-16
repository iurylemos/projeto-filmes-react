import styled from 'styled-components';

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: blueviolet;
`;

export const FilmeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.largura}px`};
`;

export const ListaFilmesStyled = styled.div`
  margin: 15px;
`;

export const ListaFilmes = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFF;
margin: 15px;
padding: 15px;
border-radius: 5px;
`;