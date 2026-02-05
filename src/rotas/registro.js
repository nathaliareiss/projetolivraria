import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 



export default function Register() {
  const [form, setForm] = useState({ nome: "",dataNascimento:"" ,email: "", senha: "", confirmarSenha: "" });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");


  
  // useNavigate é um hook do react-router-dom para navegar entre páginas
  const navigate = useNavigate();


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    const { nome, email, senha, confirmarSenha, dataNascimento } = form;

    // 1) Validação de senha igual
    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem.");
      return;
    }

    // 2) Validação de tamanho mínimo (por segurança)
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    // 3) Validação simples de data
    if (!dataNascimento) {
      setErro("Informe sua data de nascimento.");
      return;
    }



    try {
      await axios.post("http://localhost:8000/cadastre-se", {
        nome,
        email,
        senha,
        dataNascimento, // vamos tratar isso no backend
      });
      setSucesso("Cadastro realizado com sucesso!");

     // Se o backend retornou token vai salvar e redirecionar
      if (res.data.token) {
        // Salva o token no localStorage
        localStorage.setItem("token", res.data.token);
        // Salva os dados do usuário
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // Redireciona para a estante
        navigate("/estante");
      } else {
        // Se não veio token, só mostra sucesso
        setSucesso("Cadastro realizado com sucesso!");
        setForm({
          nome: "",
          email: "",
          senha: "",
          confirmarSenha: "",
          dataNascimento: "",
        });
      }

    //  limpar campos
    setForm({
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      dataNascimento: "",
    });


    } catch (err) {
      // 👇 AQUI ESTÁ A CHAVE
        if (err.response && err.response.data?.mensagem) {
        setErro(err.response.data.mensagem);
      } else {
        setErro("Erro inesperado ao cadastrar");
      }
    }
  }
//visualizacao:
  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome"value={form.nome} onChange={handleChange} />
      <input name="email" placeholder="Email"value={form.email} onChange={handleChange} />
      <input name="dataNascimento"type="date"placeholder="Data de nascimento"value={form.dataNascimento} onChange={handleChange}/>
      <input name="senha"type="password" placeholder="Senha"onChange=      {handleChange} />  
      <input name="confirmarSenha" type="password"placeholder="Confirme a senha"
        value={form.confirmarSenha}onChange={handleChange} />


    {erro && <p style={{ color: "red" }}>{erro}</p>}
    {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}

      <button>Cadastrar</button>
    </form>
  );
}
