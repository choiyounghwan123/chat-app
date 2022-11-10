import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/main">Main</Link></li>
        </>
    )
}

export default Menu;