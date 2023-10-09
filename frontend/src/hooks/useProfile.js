import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useLogout } from "./useLogout";
import { REACT_APP_API_URL } from "../utils/apiConfig";

export const useProfile = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const deleteUser = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3001/api/user/me", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
    }

    if (response.ok) {
      setIsLoading(false);
      logout();
    }
  };

  const editProfile = async (
    title,
    first_name,
    last_name,
    email,
    password,
    phone
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3001/api/user/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title,
        first_name,
        last_name,
        email,
        ...(password && { password }),
        phone,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
    }

    if (response.ok) {
      setIsLoading(false);
      setSuccess(json.message);
    }
  };
  return { editProfile, isLoading, error, success, deleteUser };
};
