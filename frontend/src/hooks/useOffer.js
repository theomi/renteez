import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { REACT_APP_API_URL } from '../utils/apiConfig';


export const useOffer = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()

    const createOffer = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3001/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            'Authorization': `Bearer ${user.token}`,
            body: JSON.stringify({ email, password })
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
    return { createOffer, isLoading, error }
}