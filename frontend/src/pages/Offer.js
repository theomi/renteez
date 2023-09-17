import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import apartment from '../img/apartment.jpg'
import { REACT_APP_API_URL } from '../utils/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faRulerCombined, faDoorOpen, faTrain, faPaw, faPlug, faDroplet, faUser, faCalendar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const apiUrl = `${REACT_APP_API_URL}/api/blogs`;
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

const BlogDetails = () => {

  return (
    <div className="offer">
      <h2 className="title-second mb-16">Details of the offer</h2>
      <img src={apartment} className="offer-detail-picture"></img>
      <h1 className="offer-title">Wonderful apartment in central Helsinki with balcony</h1>
      <h2 className="offer-address">{icon_address} Pohjoisesplanadi 32, Helsinki</h2>
      <h3 className="offer-infos">{icon_surface} 46,2 m²    {icon_rooms} 2½ rooms  {icon_transports} ~350m  {icon_pets} allowed  {icon_power} not included    {icon_water} not included</h3>
      <p className="offer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio eros, ullamcorper vitae enim sed, scelerisque tempor magna. Cras purus risus, vulputate ut nunc id, pellentesque vehicula mauris. Nunc eget enim tincidunt, malesuada turpis sed, commodo purus. Curabitur ante nunc, auctor at mattis vitae, tristique sit amet purus. Aenean et ipsum at felis efficitur aliquet. Fusce nec arcu nisl. In in risus id ipsum posuere porttitor. Suspendisse nec fringilla magna. Vestibulum tincidunt tellus ac libero dapibus, a sodales nunc maximus.</p>
      <h1 className="offer-price mt-32 mb-32">750€/mo  <span className="charges">(excl. 120€ charges)</span></h1>
      <div className="contact-info">
        <h3>Offer published by {icon_user} Replivinge on {icon_calendar} 26/07/2023</h3>
        <a className="button mt-16 mr-16" href="#">{icon_envelope} Contact by email</a>
        <a className="button-disabled mt-16 hidden">{icon_phone} Contact by phone</a>
      </div>
    </div>

  );
}

export default BlogDetails;