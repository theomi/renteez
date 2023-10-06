import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REACT_APP_API_URL } from '../utils/apiConfig';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const SearchForm = () => {
    const [title, setTitle] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <form className="search-form">


                <div>
                    <label htmlFor='title'>Title</label>
                    <select className='input' id='rentPrice' name='rentPrice' value={title}
                        onChange={(e) => setTitle(e.target.value)} required>
                        <option value='' disabled>Select...</option>
                        <option value='mr'>Mr</option>
                        <option value='ms'>Ms</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='userName'>First name</label>
                    <input id='userName' type="text" className='input' placeholder='John' required value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}></input>

                </div>
                <div>
                    <label htmlFor='lastName'>Last name</label>
                    <input id='lastName' type="text" className='input' placeholder='Wick' required value={last_name}
                        onChange={(e) => setLastName(e.target.value)}></input>
                </div>


                <div>
                    <label htmlFor='emailAddress'>Email Address</label>
                    <input id='emailAddress' type="email" className='input' placeholder='name@example.com' required value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="password" className='input' placeholder='••••••••' required value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor='phone'>Phone</label>
                    <input id='phone' type="tel" className='input' placeholder='+358' required value={phone}
                        onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <button className="button"> Update</button>
            </form>
        </div>
    );
}

export default SearchForm;