import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../iconesHeader';
import Logo from '../Logo';
import styled from 'styled-components';



const HeaderContainer = styled.header`
  background-color: rgb(181, 155, 184);
  display:flex;
  justify-content:center
`

function Header(){
    return(
    <div className='App' >
     <HeaderContainer>
         <Logo/>
         <OpcoesHeader/>
         <IconesHeader/>

      </HeaderContainer>
    </div>
    )
}


export default Header