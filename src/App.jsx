import { useState } from "react";

import "./App.css";
import Result from "./component/Result";

function App() {
  const [movies, setMovies] = useState([1, 2, 3]);

  return (
    <>
      <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
        <input
          type="search"
          // value={search}
          // onChange={changeTheSearch}
          className="w-full border border-black rounded text-slate-700 p-4"
        />
        <Result movies={movies} />
      </div>
    </>
  );
}

export default App;
