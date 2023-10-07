import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import apartment from '../img/apartment.jpg'
import { REACT_APP_API_URL } from '../utils/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faRulerCombined, faDoorOpen, faTrain, faPaw, faPlug, faDroplet, faUser, faCalendar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const apiUrl = `${REACT_APP_API_URL}/api/listings`;
const icon_address = <FontAwesomeIcon color="pink" icon={faLocationDot} />
const icon_rooms = <FontAwesomeIcon icon={faDoorOpen} />
const icon_transports = <FontAwesomeIcon icon={faTrain} />
const icon_surface = <FontAwesomeIcon icon={faRulerCombined} />
const icon_pets = <FontAwesomeIcon icon={faPaw} />
const icon_power = <FontAwesomeIcon icon={faPlug} />
const icon_water = <FontAwesomeIcon icon={faDroplet} />
const icon_user = <FontAwesomeIcon icon={faUser} />
const icon_calendar = <FontAwesomeIcon icon={faCalendar} />
const icon_envelope = <FontAwesomeIcon icon={faEnvelope} />
const icon_phone = <FontAwesomeIcon icon={faPhone} />

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  const [offer, setOffer] = useState("")

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await fetch(`${apiUrl}/${id}`)
      console.log(`${apiUrl}/${id}`);
      const json = await response.json()

      if (response.ok) {
        setOffer(json)
      }
    }

    fetchOffer()

  }, [id])

  return (
    <div className="offer">
      <h2 className="title-second mb-16">Details of the offer</h2>
      <img src={apartment} className="offer-detail-picture" alt="offer" />
      <h1 className="offer-title">{offer.title}</h1>
      <h2 className="offer-address">{icon_address} {offer.address}, {offer.city}</h2>
      <h3 className="offer-infos">{icon_surface} {offer.surface} m²    {icon_rooms} {offer.roomCount} rooms  {icon_transports} ~{offer.transport}m  {icon_pets} {offer.pets ? "allowed" : "prohibited"}  {icon_power} {offer.electricity ? "included" : "not included"}    {icon_water} {offer.water ? "included" : "not included"}</h3>
      <p className="offer-text">{offer.description}</p>
      <h1 className="offer-price mt-32 mb-32">{offer.rent}€/mo  <span className="charges">(excl. 0€ charges)</span></h1>
      <div className="contact-info">
        <h3>Offer published by {icon_user} {offer.createdBy} on {icon_calendar} {offer.createdAt}</h3>
        <a className="button mt-16 mr-16" href="#">{icon_envelope} Contact by email</a>
        <a className="button-disabled mt-16 hidden">{icon_phone} Contact by phone</a>
      </div>
    </div>

  );
}

export default Offer;