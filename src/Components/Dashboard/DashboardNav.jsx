import { NavLink } from "react-router-dom";


const DashboardNav = () => {

    const isAdmin = true;
    const isDonor = false;
    const isVolunteer = false;

    return (
        <div className="h-screen ">
            {
                isAdmin &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/all-user"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Users</li></NavLink>
                    <NavLink to="/dashboard/all-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Donation Requests</li></NavLink>
                    <NavLink to="/dashboard/content-management"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                </div>
            }
            {
                isDonor &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/my-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">My Donation Request</li></NavLink>
                    <NavLink to="/dashboard/create-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Create Donation Request</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                </div>
            }
            {
                isVolunteer &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/all-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Donation Requests</li></NavLink>
                    <NavLink to="/dashboard/content-management"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                </div>
            }
        </div>
    );
};

export default DashboardNav;