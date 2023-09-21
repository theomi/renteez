import { useEffect, useState } from "react"
import ProfileForm from '../components/ProfileForm';
import Card from '../components/Card';

import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/listings`;

const Profile = () => {
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
      <h2 className="title-second">Hello, user</h2>
      <ProfileForm />
      <hr />
      <h2 className="title-second">Your offers</h2>
      <div className="offers">

        {offers && offers.map(offer => (

          <Card offer={offer} />

        ))}

      </div>

      <a className="button mt-32" href="publish">New offer</a>
    </div>
  );
}

export default Profile;