
import Header from './componentes/Header';
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/ultimoslancamentos';



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
    <UltimosLancamentos/>
   </AppContainer>
  );
}

export default App;
