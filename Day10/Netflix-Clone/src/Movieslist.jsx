import React from 'react'
import './MoviesList.css'
import movies from './Movies'

const MoviesList = () => {
  return (
    <div className="movie-list">
        {movies.map(movie => (
            <div key={movie.id} className="movie-card">
                <img src={movie.image} className='movie-img' alt={movie.title} />
                <h1>Title: {movie.title}</h1>
                <h2>Language: {movie.language}</h2>
                <h2>Cost: {movie.cost}</h2>
            </div>
        ))}
    </div>
  )
}

export default MoviesList