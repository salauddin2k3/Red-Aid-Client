import { NavLink } from "react-router-dom";


const DashboardNav = () => {

    const isAdmin = false;
    const isDonor = false;
    const isVolunteer = true;

    return (
        <div className="h-screen ">
            {
                isAdmin &&
                <div>
                    <NavLink to="/dashboard/all-user"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Users</a></NavLink>
                    <NavLink to="/dashboard/all-donation-request"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Donation Requests</a></NavLink>
                    <NavLink to="/dashboard/content-management"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</a></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><a className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</a></NavLink>
                </div>
            }
            {
                isDonor &&
                <div>
                    <NavLink to="/dashboard/my-donation-request"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">My Donation Request</a></NavLink>
                    <NavLink to="/dashboard/create-donation-request"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Create Donation Request</a></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><a className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</a></NavLink>
                </div>
            }
            {
                isVolunteer &&
                <div>
                    <NavLink to="/dashboard/all-donation-request"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Donation Requests</a></NavLink>
                    <NavLink to="/dashboard/content-management"><a className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</a></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/"><a className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</a></NavLink>
                </div>
            }
        </div>
    );
};

export default DashboardNav;