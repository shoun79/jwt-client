import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    console.log('token', token);
    useEffect(() => {
        const email = user?.email;
        const uid = user?.uid;
        const currentUser = {
            email,
            uid
        }
        if (email && uid) {
            axios.put(`${import.meta.env.VITE_APP_SERVER_URL}/user/${email}`, currentUser)
                .then(res => {
                    const token = res?.data?.data;
                    console.log(token);
                    setToken(token)
                    localStorage.setItem('jwt-token', token)
                })
        }



    }, [user])

    console.log('after token', token);
    return [token]
}

export default useToken;