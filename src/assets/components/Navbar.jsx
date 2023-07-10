import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="text-white flex flex-row">
            <div className="px-10">
                <h2><span className=" font-bold font-mono text-blue-600 text-4xl">Gid</span><span className="text-pink-600 text-4xl">Movies</span></h2>
            </div>
            <div className="">
                <Link to="/" className="text-2xl inline-block text-rose-600">Home</Link>
                <Link to="/movies" className="text-2xl">Movies</Link>
            </div>
        </div>
    );
}

export default NavBar;