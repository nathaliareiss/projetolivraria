
import Header from './componentes/Header';
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa';

const AppContainer = styled.div `  
        
        width: 100w;
        height: 100vh;
        background-image: linear-gradient(90deg,#896587 35%,#326589 100%);
    
`

function App() {
  return (
    <AppContainer>
    <Header/>
    <Pesquisa />
   </AppContainer>
  );
}

export default App;
