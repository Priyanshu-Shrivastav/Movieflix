import React, { useContext } from "react";
import { MovieContext } from "../context";

const Search = () => {
  const { query, setQuery,isError , setIsError } = useContext(MovieContext);
  return (
    <>
      <section className="search-section">
        <h2>Search your favourite movie</h2>

        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search here..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>

        <div className="card-error">
          <p>{isError.show && isError.msg }</p>
        </div>
      </section>
    </>
  );
};

export default Search;
