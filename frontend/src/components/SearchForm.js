import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const icon_search = <FontAwesomeIcon icon={faMagnifyingGlass} />


const SearchForm = () => {
    return (
        <div>
            <form className="search-form">

                <div>
                    <label htmlFor='city'>City</label>
                    <select className='input' id='city' name='city' required>
                        <option value='' disabled selected>Select...</option>
                        <option value='helsinki'>Helsinki</option>
                        <option value='espoo'>Espoo</option>
                        <option value='vantaa'>Vantaa</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='surface'>Surface</label>
                    <select className='input' id='surface' name='surface' required>
                        <option value='' disabled selected>Select...</option>
                        <option value='-20'>less than 20 m²</option>
                        <option value='20-40'>20 m² - 40 m²</option>
                        <option value='40-50'>40 m² - 50 m²</option>
                        <option value='50-100'>50 m² - 100 m²</option>
                        <option value='100+'>more than 100 m²</option>

                    </select>
                </div>

                <div>
                    <label htmlFor='roomCount'>Room count</label>
                    <select className='input' id='roomCount' name='roomCount' required>
                        <option value='' disabled selected>Select...</option>
                        <option value='1-2'>1-2</option>
                        <option value='2-3'>2-3</option>
                        <option value='3-4'>3-4</option>
                        <option value='4+'>more than 4</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='includedServices'>Included services</label>
                    <select className='input' id='includedServices' name='includedServices' multiple>
                        <option value='' disabled selected>Select...</option>
                        <option value='laundry'>Laundry</option>
                        <option value='sauna'>Sauna</option>
                        <option value='internet'>Internet</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='distanceTransports'>Distance from transports</label>
                    <select className='input' id='distanceTransports' name='distanceTransports' required>
                        <option value='' disabled selected>Select...</option>
                        <option value='-100'>less than 100m</option>
                        <option value='100-150'>100m-150m</option>
                        <option value='150-300'>150m-300m</option>
                        <option value='300-500'>300m-500m</option>
                        <option value='500+'>more than 500m</option>

                    </select>
                </div>

                <div>
                    <label htmlFor='rentPrice'>Rent price</label>
                    <select className='input' id='rentPrice' name='rentPrice' required>
                        <option value='' disabled selected>Select...</option>
                        <option value='-300'>less than 400€</option>
                        <option value='400-500'>400€-500€</option>
                        <option value='500-600'>500€-600€</option>
                        <option value='600-700'>600€-700€</option>
                        <option value='700+'>more than 700€</option>
                    </select>
                </div>

                <button className="button">{icon_search} Search</button>
            </form>
        </div>
    );
}

export default SearchForm;