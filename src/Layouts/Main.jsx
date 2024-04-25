import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
    return (
        <div>
            <div className="container mx-auto m-4 px-4">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-375px)]">
            <Outlet></Outlet>
            </div> 
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;