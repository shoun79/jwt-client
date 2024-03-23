import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen flex-col'>
                <img src='https://raw.githubusercontent.com/0nahid/manufacturer-website-client/main/src/Componnets/Errors/error-404.png' alt="error" />

                <Link><button className="bg-blue-900 px-4 py-2 text-white">Back to home</button></Link>
            </div>
        </div>
    );
};

export default Page404;