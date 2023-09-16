import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const icon_lock = <FontAwesomeIcon icon={faLock} />


const LoginForm = () => {
    return (
        <div>
            <form className="login-form">

                <div>
                    <label htmlFor='emailAddress'>Email Address</label>
                   <input id='emailAddress' type="email" className='input' placeholder='name@example.com' required></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                   <input id='password' type="password" className='input' placeholder='••••••••' required></input>
                </div>
                <button className="button">{icon_lock} Login</button>

            </form>
        </div>
    );
}

export default LoginForm;