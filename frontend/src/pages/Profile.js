import { useEffect, useState } from "react"
import ProfileForm from '../components/ProfileForm';
import Card from '../components/Card';
import { useAuthContext } from "../hooks/useAuthContext";

import { REACT_APP_API_URL } from '../utils/apiConfig';

const fetchOffersUrl = `${REACT_APP_API_URL}/api/listings/userlistings`;
const fetchUserInfoUrl = `${REACT_APP_API_URL}/api/user/me`;

const Profile = () => {
  const [offers, setOffers] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(fetchOffersUrl, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        setOffers(json)
      }
    }

    const fetchUserInfo = async () => {
      const response = await fetch(fetchUserInfoUrl, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        setUserInfo(json)
      }
    }

    if (user) {
      fetchOffers()
      fetchUserInfo()
    }
  }, [user])
  return (
    <div>
      <h2 className="title-second">Hello, {userInfo && userInfo.first_name}</h2>

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