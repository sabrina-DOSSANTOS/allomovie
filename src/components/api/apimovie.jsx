import axios from "axios";
import React from 'react';


const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'

})
export default apiMovie


const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzM2ZjQ3MDI4YmYwMDljNTI5ZWU5NDY5YWVlYmNhNyIsInN1YiI6IjYwNjU4ZjE5ZTYyNzE5MDA2ZWQ4N2VkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OXd-iRhBv1GccuOYShUXsBYZaLpXrYRe7zHoPBTTEF8'

apiMovie.interceptors.request.use((request) => {

    request.headers['Authorization'] = `Bearer ${TOKEN}` 
    return request
})



export const MapMovieApi = (m) => ({
       
            img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
            title: m.title,
            details: `${m.release_date} | ${m.vote_average}/10`,
            description: m.overview

});
