import { Link } from "react-router-dom";
import logo from "../img/logo.svg"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <nav className="navbar">
      <Link to="/"><img className="logo" src={logo} alt="Renteez" /></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
      </div>
      <div className="nav-right">
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick} style={{
              color: 'white',
              borderColor: '#3FCA54',
              color: '#3FCA54',
              borderStyle: 'solid',
              padding: '6px',
              borderRadius: '8px'
            }}>Logout</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register" style={{
              color: 'white',
              borderColor: '#e13737',
              color: '#e13737',
              borderStyle: 'solid',
              borderRadius: '8px'
            }}>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;