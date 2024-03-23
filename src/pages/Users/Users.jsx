import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import useAdmin from "../../hooks/useAdmin";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/allusers`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                console.log(res.data);
                setUsers(res.data)
            })
    }, [])
    return (
        <div>
            <h2 className="text-center text-3xl fond-bold">Users: {users.length}</h2>
        </div>
    );
};

export default Users;