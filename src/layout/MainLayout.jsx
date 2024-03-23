import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import './../index.css'

const MainLayout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? 'heroDarkPattern' : 'heroLightPattern'}>
            <div className='container mx-auto'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;