import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [erro, setErro] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    try {
      await axios.post("http://localhost:8000/cadastre-se", form);
      alert("Cadastro realizado com sucesso");
    } catch (err) {
      // 👇 AQUI ESTÁ A CHAVE
      if (err.response && err.response.data?.mensagem) {
        setErro(err.response.data.mensagem);
      } else {
        setErro("Erro inesperado ao cadastrar");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="senha"
        type="password"
        placeholder="Senha"
        onChange={handleChange}
      />

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <button>Cadastrar</button>
    </form>
  );
}
