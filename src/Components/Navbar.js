import { Link } from "react-router-dom";
function Navbar(){
    return (
        <div>
            <Link className="nav" to="/">Home</Link> 
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar;