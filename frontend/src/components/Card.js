import { Link } from "react-router-dom";
import preview from '../img/offer-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faRulerCombined, faDoorOpen, faTrain } from '@fortawesome/free-solid-svg-icons'

const icon_address = <FontAwesomeIcon color="pink" icon={faLocationDot} />
const icon_rooms = <FontAwesomeIcon icon={faDoorOpen} />
const icon_transports = <FontAwesomeIcon icon={faTrain} />
const icon_surface = <FontAwesomeIcon icon={faRulerCombined} />

const Navbar = () => {
    return (
        <div className="offer-card">
            <img className="offer-picture" src={preview} alt="offer" />
            <div className="offer-details">
                <Link to={`/offer/1`}>
                    <h3>Wonderful apartment in central Helsinki with balcony</h3>
                    <p className="offer-address">{icon_address} Pohjoisesplanadi 32, Helsinki</p>
                    <p className="offer-infos">{icon_surface} 46,2 m²{icon_rooms} 2½ rooms {icon_transports} ~350m</p>
                    <p className="offer-price">750€/mo <span className="charges">(excl. 120€ charges)</span></p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;