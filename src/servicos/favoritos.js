import axios from 'axios'

const favoritosAPI = axios.create({baseURL:"http://localhost:8000"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/favoritos')

    return response.data
}

 async function postFavorito(livro) {
  const payload = {
    id: livro.id || livro._id || Date.now().toString(),
    titulo: livro.titulo || livro.nome }
  const response = await favoritosAPI.post('/favoritos', payload);
  return response.data;
}

async function deleteFavorito(id) {
    const response=await favoritosAPI.delete(`/favoritos/${id}`)
    return response.data
}



export {
    getFavoritos,
    postFavorito,
   deleteFavorito
}

