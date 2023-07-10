/* eslint-disable react/prop-types */
// import { AppContext } from "../../App";
// import { useContext } from "react";

import { BiSearch } from 'react-icons/bi';
import { MovieCard } from "../components";



const Movies = ({ movies, setSearchTerm, handleSubmit, searchTerm }) => {
    //const { movies } = useContext(AppContext);
    return (
        <div>
            <form action="" className="flex flex-row p-3 w-full" >
                <input type="text"
                    placeholder="Search for Movies"
                    className=" w-3/6 border outline-none focus:border-1 py-2 px-7 shadow-lg focus:border-cyan-600 duration-200 scale-105 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div onClick={handleSubmit} className=" bg-rose-600 mx-6 py-2 px-6 rounded-md cursor-pointer">
                    <BiSearch className="border-white" />
                </div>
            </form>

            <div className="grid lg:grid-cols-6 gap-3 md:grid-cols-3 sm:grid-cols-1">
                {movies.map((movie) => {
                    return <MovieCard key={movie.Year} movie={movie} />

                })}
            </div>
        </div>
    );
}

export default Movies;