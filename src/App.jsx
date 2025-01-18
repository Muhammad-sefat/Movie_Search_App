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

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => setMovies(response.data.results))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, []);
  return (
    <>
      <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
        <input
          type="search"
          // value={search}
          // onChange={changeTheSearch}
          className="w-full border hover:border-none border-black rounded text-slate-800 p-4"
        />
        <Result movies={movies} />
      </div>
    </>
  );
}

export default App;
