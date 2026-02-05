import styled from "styled-components"
import {Link, useNavigate}from 'react-router-dom'
import { useState, useEffect } from 'react';




const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`


function OpcoesHeader() {
//aqui e onde vai verificar se esta logado ou nao para saber o que exibir
//no cabecalho
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

  // verifica se tem token
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // !! converte para boolean (true se tem token, false se não)
  }, []); // array vazio = roda só uma vez quando monta

   // Função para fazer logout
   function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false); // atualiza o estado
    navigate("/login"); // redireciona para login
  }

  // Opções no meu para quando quando NÃO está logado e quando
  const opcoesNaoLogado = ['CADASTRE-SE', 'LOGIN'];
  const opcoesLogado = ['PERFIL','FAVORITOS','CALENDARIO','ESTANTE'];



    return(
        <Opcoes>
        {/* Se NÃO está logado, mostra as opcoes de nao logado */}
        {!isLoggedIn && opcoesNaoLogado.map((texto) => (
          <Link key={texto} to={`/${texto.toLowerCase()}`}>
            <Opcao><p>{texto}</p></Opcao>
          </Link>
        ))}
             {/* Se ESTÁ logado, mostra as opcoes para loggado */}
      {isLoggedIn && opcoesLogado.map((texto) => (
        <Link key={texto} to={`/${texto.toLowerCase()}`}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}

      {/* Se ESTÁ logado, mostra botão de LOGOUT (sem Link, só onClick) */}
      {isLoggedIn && (
        <Opcao onClick={handleLogout}>
          <p>LOGOUT</p>
        </Opcao>
      )}
    </Opcoes>
  );
}
  

export default OpcoesHeader