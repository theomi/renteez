import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Create from './pages/Create'
import Browse from './pages/Browse'
import Offer from './pages/Offer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/browse"
              element={<Browse />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/offer/:id"
              element={<Offer />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Signup />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;

