import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/auth/register", form);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar conta</h2>

      <input
        name="nome"
        placeholder="Nome"
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />

      <input
        name="senha"
        placeholder="Senha"
        type="password"
        onChange={handleChange}
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
