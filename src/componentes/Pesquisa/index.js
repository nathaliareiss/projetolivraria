import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`

        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

`
const Form = styled.form`
   display: flex;
  align-items: center;
  background: transparent; /* transparente */
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px 10px;
  width: 250px; /* controla largura */

`;

const SearchButton = styled.button`
  background-color: #cd76cc; /* cor rosa */
  color: #111011;
  border: none;
  padding: 5px ;
  border-radius: 17px; /* arredonda só o lado direito */
  cursor: pointer;

  &:hover {
    background-color: #d14ccf; /* rosa mais forte no hover */
  }
`;




function Pesquisa () {
    const [livroPesquisado, setlivroPesquisado] =useState([])
    const [livros, setLivros] =useState([])

    useEffect(()=>{
      fetchLivros()
    },[])


async function fetchLivros(){
      const livrosDaApi=await getLivros()
      setLivros(livrosDaApi)
    }


// async function insertFavorito(id){
//     await postFavorito(id)
//     alert(`Livro de id:${id} inserido!`)
// }

    return(
 <PesquisaContainer>
        <Titulo>Por onde comecar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
   
    <SearchBar>
          
    <Form
        onSubmit={evento => {
        evento.preventDefault(); // evita recarregar a página
        const textoDigitado = evento.target.elements.pesquisa.value;
        const resultadoPesquisa = livros.filter(livro =>
            livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
        );
        setlivroPesquisado(resultadoPesquisa);
    }}
  >
   
     <Input
      name="pesquisa"
      placeholder="Escreva sua próxima leitura"
    />
    <SearchButton type="submit">Pesquisar</SearchButton>
    
    </Form>
   
    </SearchBar>
    


       {livroPesquisado.map(livro => (
        <Resultado>
        <p>{livro.titulo}</p>
        <img src={livro.src}/>
        </Resultado>
       ))}
 </PesquisaContainer>
    )
}

export default Pesquisa