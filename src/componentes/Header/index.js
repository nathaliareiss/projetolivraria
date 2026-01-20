import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../iconesHeader';
import Logo from '../Logo';
import './estilo.css'

function Header(){
    return(
    <div className='App' >
      <header className='App-header'>
         <Logo/>
         <OpcoesHeader/>
         <IconesHeader/>

      </header>
    </div>
    )
}


export default Header