function DesconectarGoogle({ className }) {
  const desconectar = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:8000/auth/google", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      alert("Google desconectado com sucesso");
    } else {
      alert(data.erro);
    }
  };

  return (
    <button className={ className } onClick={desconectar} style={{ background: "red", color: "white" }}>
      Desconectar Google Calendar
    </button>
  );
}

export default DesconectarGoogle;
