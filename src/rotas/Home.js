import styled from 'styled-components'
import { useState } from 'react'
import api from '../servicos/api'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/ultimoslancamentos'

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg,#896587 35%,#326589 100%);
`

function Home() {
  const [livros, setLivros] = useState([])
  const [erro, setErro] = useState('')

  async function buscarLivros(termo) {
    try {
      setErro('')
      const res = await api.get(`/books/search?q=${termo}`)
      setLivros(res.data)
    } catch (err) {
      setErro('Erro ao buscar livros')
    }
  }

  return (
    <AppContainer>
      <Pesquisa onBuscar={buscarLivros} />
      {erro && <p style={{ color: '#fff' }}>{erro}</p>}
      <UltimosLancamentos livros={livros} />
    </AppContainer>
  )
}

export default Home
