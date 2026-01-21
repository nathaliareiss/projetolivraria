import { livros } from './dadosultimoslancamentos'
import styled from 'styled-components'
import { Titulo } from '../titulo'
import CardRecomenda from '../recomendacoes'
import imagemLivro from '../imagens/Sem título.png'



const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`




function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor={"#000"}>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos