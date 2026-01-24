


function Calendario(){
    function conectarGoogle() {
  window.location.href = "http://localhost:8000/auth/google";
}
    return(
    <div className='calendario' >
     <button onClick={conectarGoogle}>
     Conectar Google Agenda
     </button>
     </div>
    )
}


export default Calendario