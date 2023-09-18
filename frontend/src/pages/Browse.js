import { useEffect, useState } from "react"
import SearchForm from '../components/SearchForm';
import Card from '../components/Card';

import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/listings`;

const Browse = () => {
  const [offers, setOffers] = useState(null)

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(apiUrl)
      const json = await response.json()

      if (response.ok) {
        setOffers(json)
      }
    }

    fetchOffers()
  }, [])
  return (
    <div>
      <h2 className="title-second">Search for an offer</h2>
      <SearchForm />
      <hr />
      <h2 className="title-second">Latest offers</h2>
      <div className="offers">

        {offers && offers.map(offer => (

          <Card offer={offer} />

        ))}

      </div>

    </div>
  );
}

export default Browse;