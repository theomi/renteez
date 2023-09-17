import { Link } from "react-router-dom";
import logo from "../img/logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><img className="logo" src={logo} /></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/register" style={{
          color: 'white',
          borderColor: '#e13737',
          color: '#e13737',
          borderStyle: 'solid',
          borderRadius: '8px'
        }}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;