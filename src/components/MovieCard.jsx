/* eslint-disable react/prop-types */

// import { useContext } from "react";
// import { AppContext } from "../../App";
const MovieCard = ({ movie }) => {

    //const { movie } = useContext(AppContext);
    return (

        <div className="bg-slate-950 rounded-lg p-2 shadow-lg text-yellow-500 hover:scale-105 duration-200 ">
            <img src={movie.Poster} alt="Card image cap" className="rounded-lg" />
            <div>
                <h3 className="uppercase font-sans">{movie.Type}</h3>
                <h5 className="font-serif">{movie.Title}</h5>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default MovieCard;