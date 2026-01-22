
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritos';


const AppContainer = styled.div `  
        
        width: 100w;
        height: 100vh;
        background-image: linear-gradient(90deg,#896587 35%,#326589 100%);
    
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

async function fetchFavoritos() {
  const favoritosDaApi = await getFavoritos()
  setFavoritos(favoritosDaApi)
  
}


useEffect(() => {
  setFavoritos([])
},[])

  return (
    <AppContainer>
      {favoritos.map(favoritos =>(
        <p>favorito.nome</p>
      ))}
   </AppContainer>
  );
}

export default Favoritos;
