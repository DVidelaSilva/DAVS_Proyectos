import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=6fcf8ab31cda23af2a9d51ee5ea31137&language=es-MX&page=1';
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
        });

        return resultados;
    } catch(e){
        console.log(e);
    };
};

export default fetchPopulares;