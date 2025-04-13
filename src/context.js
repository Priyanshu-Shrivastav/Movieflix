import React, {useState, useEffect, createContext} from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
const [isLoading, setIsLoading] = useState(false);
const [movies , setMovies] = useState([]);
const [isError , setIsError] = useState({show: false , msg: ""});
const [query,setQuery] = useState("titanic");

const fetchMovies = async (URL) => {
    try{
    const res = await fetch(URL);   
    const data = await res.json();
    console.log(data);
        if (data.Response === "True") {
            setIsLoading(false);
            setMovies(data.Search);
            setIsError({show: false, msg: ""});
        }else{
            setIsError({show: true, msg: data.Error});
        }
    
    } catch(error){
        console.log(error);
    }
}

useEffect(() => {

    const timeOut = setTimeout(() => {
        fetchMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timeOut);
},[query]);

return(
    <MovieContext.Provider value={{movies, isLoading, isError , query, setQuery}}>
        {children}
    </MovieContext.Provider>
)

}

export default MovieProvider;
