function UltimosLancamentos({ livros }) {
  return (
    <div>
      {livros.map(livro => (
        <div key={livro.googleId}>
          <img src={livro.thumbnail} alt={livro.titulo} />
          <h3>{livro.titulo}</h3>
          <p>{livro.autores.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default UltimosLancamentos
