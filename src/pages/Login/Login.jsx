import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import Spinner from '../Shared/Spinner/Spinner';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const Login = () => {
    const [signInWithGoogle, gLoading] = useSignInWithGoogle(auth);

    const [user] = useAuthState(auth);
    const [token] = useToken(user);
    const { theme } = useContext(ThemeContext);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (user?.email && token) {
        toast.success(`Welcome, ${user?.displayName}`, {
            autoClose: 4000,
        })
        navigate(from, { replace: true });
    }

    if (gLoading) {
        return <Spinner />
    }
    return (
        <div className="flex h-screen justify-center items-center px-4 lg:px-12">
            <div className="card backdrop-blur-2xl transition-colors duration-500">
                <div className="form-control w-full max-w-xs">
                    <button className="btn btn-outline btn-dark text-black font-bold"
                        onClick={() => signInWithGoogle()}
                    >   G
                        <span className={
                            theme ? "text-white" : "text-black"
                        }>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;