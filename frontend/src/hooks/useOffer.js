import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { REACT_APP_API_URL } from '../utils/apiConfig';


export const useOffer = () => {
    const [error, setError] = useState(null)
    const [retrieveOfferError, setRetrieveOfferError] = useState(false)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()

    const createOffer = async (title, description, address, postalCode, surface, roomCount, transport, rent, charges, picture, city, elevator, electricity, water, parking, disability, internet) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3001/api/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
            body: JSON.stringify({ title, description, address, postalCode, surface, roomCount, transport, rent, charges, picture, city, elevator, electricity, water, parking, disability, internet })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.message)
        }

        if (response.ok) {
            setSuccess("Offer created successfully")
            setIsLoading(false)
        }
    }

    const editOffer = async (id, title, description, address, postalCode, surface, roomCount, transport, rent, charges, picture, city, elevator, electricity, water, parking, disability, internet) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`http://localhost:3001/api/listings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
            body: JSON.stringify({ title, description, address, postalCode, surface, roomCount, transport, rent, charges, ...(picture && { picture }), city, elevator, electricity, water, parking, disability, internet })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.message)
        }

        if (response.ok) {
            setSuccess("Offer edited successfully")
            setIsLoading(false)
        }
    }

    const getOffer = async (id) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`http://localhost:3001/api/listings/${id}`)

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setRetrieveOfferError(true)
        }

        if (response.ok) {
            setIsLoading(false)
            return json;
        }
    }
    return { createOffer, getOffer, editOffer, retrieveOfferError, isLoading, error, success }
}