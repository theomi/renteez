import house from "../img/home-house.png"

import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Home = () => {

  return (
    <div className="home">
      <h2 className="title-second">Welcome to Renteez</h2>
      <h1 className="title">A quick and easy way<br />to rent student apartments</h1>
      <a className="button mt-32" href="browse">Start Browsing</a>
      <img className="picture-right" src={house} alt="house" />
    </div>
  )
}



export default Home