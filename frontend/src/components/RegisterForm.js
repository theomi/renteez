import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const icon_lock = <FontAwesomeIcon icon={faLock} />


const RegisterForm = () => {
    return (
        <div className='form-container'>
            <form method="post" className="register-form">

                <div className="fields-2">
                    <div>
                        <label htmlFor='userName'>First name</label>
                        <input id='userName' type="text" className='input' placeholder='John' required></input>
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last name</label>
                        <input id='lastName' type="text" className='input' placeholder='Wick' required></input>
                    </div>
                </div>

                <div>
                    <label htmlFor='emailAddress'>Email Address</label>
                    <input id='emailAddress' type="email" className='input' placeholder='name@example.com' required></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="password" className='input' placeholder='••••••••' required></input>
                </div>
                <button className="button">{icon_lock} Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;