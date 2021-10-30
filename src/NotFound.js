import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="not-found">
        <Link to="/">
            <h2>Error 404</h2>
            <p>Page not found click to go back to the home page</p>
        </Link>
    </div> );
}
 
export default NotFound;