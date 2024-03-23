import axios from "axios";
import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/user/admin/${email}`, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('jwt-token')}`
                }
            })
                .then(res => {

                    setAdmin(res?.data?.isAdmin)
                })
        }
    }, [user?.email])
    return [admin];
}

export default useAdmin;
