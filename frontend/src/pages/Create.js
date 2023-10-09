import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useSignup } from "../hooks/useSignup"
import useField from '../hooks/useField';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const icon_lock = <FontAwesomeIcon icon={faLock} />
const icon_warning = <FontAwesomeIcon icon={faExclamationTriangle} />

const CreatePage = () => {

  const titleInput = useField("text", "Name your offer")
  const descriptionInput = useField("text", "Describe your property in some lines")
  const addressInput = useField("text", "Kirjanpitäjänkuja 4")
  const postalCodeInput = useField("text", "02770")
  const surfaceInput = useField("number", "105")
  const roomCountInput = useField("text", "4.5")
  const rentInput = useField("number", "479")
  const chargesInput = useField("number", "30")
  const [city, setCity] = useState('')


  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()


  }

  return (
    <div>
      <h2 className="form-title">Create a new offer</h2>

      <div className='form-container'>

        {error && <div className="banner mt-16">{icon_warning} {error}</div>}

        <form method="post" className="register-form" onSubmit={handleSubmit}>

          <div>
            <label htmlFor='title'>Title</label>
            <input {...titleInput} />
          </div>

          <div>
            <label htmlFor='description'>Description</label>
            <textarea rows="5" {...descriptionInput}></textarea>
          </div>

          <div className='flex'>
            <div className='flex-60 mr-16'>
              <label htmlFor='address'>Address</label>
              <input {...addressInput} />
            </div>
            <div className='flex-10 mr-16'>
              <label htmlFor='postalCode'>Postcode</label>
              <input {...postalCodeInput} pattern="\d*" maxlength="5" />
            </div>
            <div className='flex-30'>
              <label htmlFor='city'>City</label>
              <select className='input' id='city' name='city' value={city} onChange={(e) => setCity(e.target.value)}>
                <option value='' disabled>Choose...</option>
                <option value='Helsinki'>Helsinki</option>
                <option value='Espoo'>Espoo</option>
                <option value='Vantaa'>Vantaa</option>
              </select>
            </div>
          </div>

          <hr />

          <div className='flex'>
            <div className='flex-50 mr-16'>
              <label htmlFor='address'>Surface</label>
              <input {...surfaceInput} />
            </div>
            <div className='flex-50'>
              <label htmlFor='postalCode'>Room count</label>
              <input {...roomCountInput} />
            </div>
          </div>


          <button disabled={isLoading} className="button">Create offer</button>
        </form>
      </div>

    </div>
  );
}

export default CreatePage;