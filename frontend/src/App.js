import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Create from './pages/Create'
import Browse from './pages/Browse'
import Offer from './pages/Offer'
import Navbar from './components/Navbar'

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;

