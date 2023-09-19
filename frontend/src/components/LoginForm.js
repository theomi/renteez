import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { REACT_APP_API_URL } from '../utils/apiConfig';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = `${REACT_APP_API_URL}/api/signin`;

const icon_lock = <FontAwesomeIcon icon={faLock} />
const icon_warning = <FontAwesomeIcon icon={faExclamationTriangle} />


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const loginInfo = { email, password };

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        setErrorMessage(json.message);

        if (!response.ok) {
            setHasError(true);
        }
        if (response.ok) {
            navigate('/');
        }

    }
    return (
        <div className='form-container'>

            {hasError ? <div className="banner mt-16">{icon_warning} {errorMessage}</div> : ""}

            <form method="post" className="login-form" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='emailAddress'>Email Address</label>
                    <input id='email' type="email" className='input' placeholder='name@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="password" className='input' placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required></input>
                </div>
                <button className="button">{icon_lock} Login</button>

            </form>
        </div >
    );
}

export default LoginForm;