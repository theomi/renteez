import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { REACT_APP_API_URL } from '../utils/apiConfig';


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (title, first_name, last_name, email, password, phone) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, first_name, last_name, email, password, phone })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.message)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}