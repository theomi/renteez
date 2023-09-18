import { Link } from "react-router-dom";
import preview from '../img/offer-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faRulerCombined, faDoorOpen, faTrain } from '@fortawesome/free-solid-svg-icons'

const icon_address = <FontAwesomeIcon color="pink" icon={faLocationDot} />
const icon_rooms = <FontAwesomeIcon icon={faDoorOpen} />
const icon_transports = <FontAwesomeIcon icon={faTrain} />
const icon_surface = <FontAwesomeIcon icon={faRulerCombined} />

const Card = ({ offer }) => {
    return (
        <div className="offer-card">
            <Link to={`/offer/${offer._id}`}>

                <img className="offer-picture" src={preview} alt="offer" />
                <div className="offer-details">
                    <h3>{offer.title}</h3>
                    <p className="offer-address">{icon_address} {offer.address}, {offer.city}</p>
                    <p className="offer-infos">{icon_surface} {offer.surface} m²{icon_rooms} {offer.roomCount} rooms {icon_transports} ~{offer.transport}m</p>
                    <p className="offer-price">{offer.rent}€/mo<br /><span className="charges">(excl. 0€ charges)</span></p>
                </div>
            </Link>
        </div>
    );
}

export default Card;