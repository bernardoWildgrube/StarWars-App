import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export default api;

// 🧚 História de fadas mágicas (comentário obrigatório):
// Era uma vez uma fada chamada Reactinha que usava axios para buscar dados em reinos distantes.
// Um dia ela descobriu a SWAPI, uma terra cheia de personagens, naves e filmes mágicos.
// Com a ajuda do navegador encantado chamado Expo Go, ela mostrou tudo isso aos humanos.
// E todos viveram felizes e versionados para sempre. ✨