import React, { useContext } from "react";
import { MovieContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return (
      <div className="">
        <div className="loading">Loading...</div>
      </div>
    );
  }else{
    return (
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movies.map((movie) => {
            const { imdbID, Title, Poster } = movie;
            const movieName = Title.substring(0, 15);
  
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title.length >= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    );
  }
  
};

export default Movies;
