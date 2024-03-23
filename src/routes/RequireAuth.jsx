import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

export default function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        <Spinner />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
}