import { useEffect, useState } from "react";
import { Movies } from "./assets/components";
const App = () => {
  const [movies, setMovies] = useState(0);
  //const Api_Key = `8751ab3c0a611d4f3121794d3e467a41`;
  const Movie_URL = `https://api.themoviedb.org/3/movie/550?api_key=8751ab3c0a611d4f3121794d3e467a41`
  //'https://jsonplaceholder.typicode.com/photos';

  //'https://api.themoviedb.org/3';

  //`https://api.themoviedb.org/3/movie/550?api_key=8751ab3c0a611d4f3121794d3e467a41`

  useEffect(() => {

    const fetchMovies = async () => {

      const results = await fetch(Movie_URL)

      results.json()
        .then((data) => {
          setMovies(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    fetchMovies();
    // fetch('')

    //   .then(response => response.json())

    //   //.then(data => setMovies(data.message) console.log())

    //   .then((data) => {

    //     setMovies(data);

    //     console.log(data);

    //   })

    //   .catch(err => console.log(err))

  }, [Movie_URL])
  return (
    <div>
      {movies && <Movies movies={movies} />}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  );
}

export default App;
