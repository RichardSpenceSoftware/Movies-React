import axios from 'axios';

const FILM_API_BASE_URL = "http://18.118.30.254:8080/movies/films";

class filmService {

    getfilm(){
        return axios.get(FILM_API_BASE_URL);
    }

    createfilm(film){
        return axios.post(FILM_API_BASE_URL, film);
    }

    getfilmById(filmId){
        return axios.get(FILM_API_BASE_URL + '/' + filmId);
    }

    updatefilm(film, filmId){
        return axios.put(FILM_API_BASE_URL + '/' + filmId, film);
    }

    deletefilm(filmId){
        return axios.delete(FILM_API_BASE_URL + '/' + filmId);
    }
}

export default new filmService()