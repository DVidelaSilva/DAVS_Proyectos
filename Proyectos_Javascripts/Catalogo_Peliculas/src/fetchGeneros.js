const fetchGeneros = async() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6fcf8ab31cda23af2a9d51ee5ea31137&language=es-MX';
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.genres;
    } catch(e){
        console.log(e);
    };
};

export default fetchGeneros;