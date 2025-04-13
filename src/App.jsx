import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import Error from "./components/Error";
import MovieProvider from "./context";
import "./App.css";


const App = () => {

  return (
    <MovieProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </MovieProvider> 
  );
};

export default App;
