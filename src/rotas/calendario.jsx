import { useEffect, useState } from "react";
import api from "../servicos/api";
import DesconectarGoogle from "../componentes/logoutGoogle";
import ConectarGoogle from "../componentes/botaoGoogle";


export default function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [erro, setErro] = useState("");

  const [titulo, setTitulo] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  // 🔹 Carregar eventos ao abrir a página
  useEffect(() => {
    carregarEventos();
  }, []);

  async function carregarEventos() {
    try {
      const res = await api.get("/calendar");
      setEventos(res.data);
    } catch (err) {
      setErro("Você precisa estar logado");
    }
  }

  // 🔹 Criar novo evento
  async function criarEvento(e) {
    e.preventDefault();
    setErro("");

    try {
      await api.post("/calendar/event", {
        summary: titulo,
        startISO: inicio,
        endISO: fim,
      });

      // limpa formulário
      setTitulo("");
      setInicio("");
      setFim("");

      // recarrega eventos
      carregarEventos();
    } catch (err) {
      setErro("Erro ao criar evento");
    }
  }

  return (
    <div>
      <h1>📅 Meu Calendário de Leitura</h1>
    <ConectarGoogle/>
    
    <DesconectarGoogle/>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {/* FORMULÁRIO */}
      <form onSubmit={criarEvento}>
        <input
          placeholder="Título do evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <input
          type="datetime-local"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          required
        />

        <input
          type="datetime-local"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          required
        />

        <button>Criar evento</button>
      </form>

      <hr />

      {/* LISTA DE EVENTOS */}
      <ul>
        {eventos.map((evento) => (
          <li key={evento._id}>
            <strong>{evento.summary || evento.titulo}</strong>
            <br />
            {new Date(evento.start?.dateTime || evento.inicio).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
