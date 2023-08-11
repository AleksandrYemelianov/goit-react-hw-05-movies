import axios from 'axios';


const API_KEY = '2776ce43df25dad4a5d3cc72a9a4f88f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        page: 1
    })
    const { data } = await axios.get('/trending/movie/week', { params });
    return data;
}

export const fetchMovieDetails = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    })
    const { data } = await axios.get(`/movie/${id}`, { params });
    return data;
}

export const fetchSearchStringMovie = async (query) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        page: 1,
        query
    })
    const { data } = await axios.get(`/search/movie`, { params });
    return data;
}

export const fetchCastMovie = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    })
    const { data } = await axios.get(`/movie/${id}/credits`, { params });
    return data;
}

export const fetchReviewsMovie = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    })
    const { data } = await axios.get(`/movie/${id}/reviews`, { params });
    return data;
}