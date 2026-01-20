import perfil from '../imagens/perfil.png'
import sacola from '../imagens/sacola.png'
import'./estilo.css'

const icones=[perfil, sacola]

function IconesHeader() {
    return(
        <ul className='icones'>
        {icones.map( (icone)=> (
          <li className='icone'><img src={icone}></img></li>
        ))}
       </ul>

    )
}

export default IconesHeader