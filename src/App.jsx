import { useEffect, useState } from "react";

import "./App.css";
import Result from "./component/Result";
import axios from "axios";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => setMovies(response.data.results))
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search]);
  return (
    <>
      <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-8">
        <h2 className="text-4xl font-bold text-center my-5">
          Movie Search App
        </h2>
        <input
          type="search"
          value={search}
          onChange={changeTheSearch}
          className="w-full border border-black rounded text-slate-800 p-4"
        />
        {movies.length === 0 ? (
          <div className="text-3xl text-center mt-2"> Loading... </div>
        ) : (
          <Result movies={movies} />
        )}
        <button className="border rounded my-4 p-3 bg-blue-600 hover:bg-blue-700 transform transition duration-300 hover:scale-105 text-white font-medium">
          Load More ...
        </button>
      </div>
    </>
  );
}

export default App;
