import { useEffect, useState, createContext } from "react";
import { Movies, Home, NavBar } from "./assets/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const API_URL = 'http://www.omdbapi.com?apikey=92e40431';
//const Movie_URL = 'https://api.themoviedb.org/3/movie/550?api_key=8751ab3c0a611d4f3121794d3e467a41';

export const AppContext = createContext();
const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTerm)
  };

  const searchMovies = async (Title) => {
    const response = await fetch(`${API_URL}&s=${Title}`);
    const data = await response.json();
    console.log(data.Search);

    setMovies(data.Search)
  };

  useEffect(() => {
    searchMovies('America')
  }, []);

  return (

    <div className="bg-slate-950 p-3">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
