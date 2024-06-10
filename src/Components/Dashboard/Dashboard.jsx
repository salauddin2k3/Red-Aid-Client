import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";



const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard Sidebar */}
            <div className="w-72 h-screen hidden lg:block fixed bg-gray-700 pt-10 pl-5">
                <DashboardNav></DashboardNav>
            </div>

            {/* Dashboard content */}
            <div className="pt-10 lg:ml-72 w-full mt-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;