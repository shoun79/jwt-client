import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ImFacebook2, ImGithub, ImLinkedin } from "react-icons/im";
import { ThemeContext } from "../../context/ThemeProvider";
import Spinner from "../Shared/Spinner/Spinner";
const Me = () => {
    const [user] = useAuthState(auth);
    const [getUser, setGetUser] = useState('');
    const { theme, loading } = useContext(ThemeContext);
    let darkFont = theme ? 'text-info' : 'text-black';
    let socialIconStyle = theme ? `h-7 w-7 hover:text-info` : "h-7 w-7 hover:text-secondary";
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                console.log(res.data);
                setGetUser(res?.data?.data);
            })
    }, [user?.email])
    if (loading || getUser.length === 0) {
        return <Spinner />
    }
    return (
        <>
            <div className="min-h-screen">
                <div>
                    <div className="card card-compact max-w-lg bg-base-100 shadow-xl mx-auto mt-5">
                        <div className="avatar">
                            <div className="mx-auto w-32 md:w-48 mt-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt=
                                    {user?.displayName}
                                />
                            </div>
                        </div>
                        <div className="mx-auto text-center mt-5 mb-6">
                            <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                            <p className="text-sm font-bold">Full Stack Web developer</p>
                            <p className=""> <span className={darkFont + " underline mr-1"}>Email:</span>
                                {getUser?.email} </p>
                            <p>Uid:{getUser?.uid}</p>
                            <span>_Id: {getUser?._id}</span>
                            <div className="flex mt-5 justify-center">
                                <a href="https://www.facebook.com/hashtagnahid" target="_blank" rel="noreferrer" className="mr-5"><ImFacebook2 className={socialIconStyle} /></a>
                                <a href="https://www.linkedin.com/in/nahid-hassan-bulbul/" target="_blank" rel="noreferrer" className="mr-5"><ImLinkedin className={socialIconStyle} /></a>
                                <a href="https://github.com/0nahid/" target="_blank" rel="noreferrer" className="mr-5"><ImGithub className={socialIconStyle} /></a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Me;