import { useEffect, useState } from "react";
import api from "../servicos/api";
import Agenda from "../componentes/Agenda";


export default function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarEventos() {
      try {
        const res = await api.get("/calendar");
        setEventos(res.data);
      } catch (err) {
        setErro("Você precisa estar logado");
      }
    }

    carregarEventos();
  }, []);

  return (
    <div>
      <h1>Meu Calendário de Leitura</h1>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
        <Agenda/>
      <ul>
        {eventos.map(ev => (
          <li key={ev._id}>
            {ev.titulo} — {new Date(ev.inicio).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
