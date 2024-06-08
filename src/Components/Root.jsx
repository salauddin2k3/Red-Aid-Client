import { Outlet } from "react-router-dom";
import Footer from "./Pages/SharedPage/Footer";
import BgProvider from "../Providers/BgProvider";
import Navbar from "./Pages/SharedPage/Navbar";


const Root = () => {
    return (
        <div className="">
            <BgProvider></BgProvider>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;