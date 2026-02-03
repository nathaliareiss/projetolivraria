function ConectarGoogle({className}) {
  const conectarGoogle = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Usuário não autenticado");
      return;
    }

    window.location.href =
      `http://localhost:8000/auth/google?token=${token}`;
  };

  return (
    <button className={className}onClick={conectarGoogle}>
      Conectar Google Calendar
    </button>
  );
}

export default ConectarGoogle;
