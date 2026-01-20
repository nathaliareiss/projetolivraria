import logo from '../imagens/logo.png'
import './estilo.css'


function Logo(){
    return(
        <div className='logo'>
             <img 
             src={logo} 
             alt='logo'
             className='logo-img'
             ></img>
              <p><strong>Nathalia</strong>Books</p>
       </div>

    )
}

export default Logo
