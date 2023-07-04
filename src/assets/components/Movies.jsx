/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
const Movies = ({ movies }) => {
    return (

        <div className="grid grid-cols-8 gap-2">
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    );
}

export default Movies;