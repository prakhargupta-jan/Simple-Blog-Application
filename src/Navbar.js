import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Ultra Max Pro Blog</h1>
            <div className="linkes">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "lightcoral",
                    borderRadius: "6px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar