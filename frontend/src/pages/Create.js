import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useSignup } from "../hooks/useSignup"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const icon_lock = <FontAwesomeIcon icon={faLock} />
const icon_warning = <FontAwesomeIcon icon={faExclamationTriangle} />

const CreatePage = () => {

  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(title, firstName, lastName, email, password, phone)

  }

  return (
    <div>
      <h2 className="form-title">Create a new offer</h2>

      <div className='form-container'>

        {error && <div className="banner mt-16">{icon_warning} {error}</div>}

        <form method="post" className="register-form" onSubmit={handleSubmit}>

          <div>
            <label htmlFor='title'>Title</label>
            <input id='title' type="text" className='input' placeholder='Describe your property in one line' required value={title}
              onChange={(e) => setTitle(e.target.value)}></input>
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
          <button disabled={isLoading} className="button">{icon_lock} Register</button>
        </form>
      </div>

    </div>
  );
}

export default CreatePage;