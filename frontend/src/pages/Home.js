import { useEffect, useState } from "react"
import BlogList from "./Browse";
import house from "../img/home-house.png"

import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Home = () => {
  /*const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(apiUrl)
      const json = await response.json()

      if (response.ok) {
        setBlogs(json)
      }
    }

    fetchBlogs()
  }, [])*/

  return (
    <div className="home">
      <h2 className="title-second">Welcome to Renteez</h2>
      <h1 className="title">A quick and easy way<br />to rent student apartments</h1>
      <a className="button mt-32" href="browse">Start Browsing</a>
      <img className="home-picture" src={house} alt="house" />
    </div>
  )
}



export default Home