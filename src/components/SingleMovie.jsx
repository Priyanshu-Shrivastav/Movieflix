

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.omdbapi.com/?apikey=a2f2fcef";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async () => {
    setIsLoading(true);
    const res = await fetch(`${API_URL}&i=${id}`);
    const data = await res.json();
    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  // styling-objects
  const styleObjPara = {fontSize: "16px"};
  const cardStyle = {background: "white", width: "100%" , maxWidth: "500px"};
  const cardInfo = {display: "flex", flexDirection: "column",gap: "10px", marginLeft: "18px"};

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="movie-section">
      <div className="card" style={cardStyle}>
        <img src={movie.Poster} alt={movie.Title} style={{ minWidth: "initial"}} />
        <div className="card-info" style={cardInfo}>
          <h2 style={{fontSize:"4rem"}}>{movie.Title}</h2>
          
          <p style={styleObjPara}>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p style={styleObjPara}>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p style={styleObjPara}>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p style={styleObjPara}>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
