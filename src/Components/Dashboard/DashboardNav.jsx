import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const DashboardNav = () => {

    const { user, logOut } = useContext(AuthContext);

    const { data: users = [], isLoading, isFetching, } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`https://red-aid.vercel.app/users/${user?.email}`);
            return res.data;
        }
    });

    const isPending = isLoading || isFetching;

    if (isPending) {
        return <span className="">Loading...</span>;
    }

    // console.log(users[0]);

    return (
        <div className="h-screen">
            {
                users[0]?.role === "admin" &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/all-users"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">All Users</li></NavLink>
                    <NavLink to="/dashboard/all-blood-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">All Donation Requests</li></NavLink>
                    <NavLink to="/dashboard/content-management"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/dashboard/profile"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">User Profile</li></NavLink>
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                    <NavLink><li onClick={logOut} className=" text-white hover:bg-gray-900 py-2 px-4 block">Sign Out</li></NavLink>
                </div>
            }
            {
                users[0]?.role === "donor" &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/my-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">My Donation Request</li></NavLink>
                    <NavLink to="/dashboard/create-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Create Donation Request</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/dashboard/profile"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">User Profile</li></NavLink>
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                    <NavLink><li onClick={logOut} className=" text-white hover:bg-gray-900 py-2 px-4 block">Sign Out</li></NavLink>
                </div>
            }
            {
                users[0]?.role === "volunteer" &&
                <div>
                    <NavLink to="/dashboard"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Dashboard</li></NavLink>
                    <NavLink to="/dashboard/all-blood-donation-request"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">All Donation Requests</li></NavLink>
                    <NavLink to="/dashboard/content-management"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">Content Management</li></NavLink>
                    <hr className="m-4" />
                    <NavLink to="/dashboard/profile"><li className=" text-white hover:bg-gray-900 py-2 px-4 block">User Profile</li></NavLink>
                    <NavLink to="/"><li className=" text-white hover:bg-gray-900 py-2 px-4 block italic">Back to home</li></NavLink>
                    <NavLink><li onClick={logOut} className=" text-white hover:bg-gray-900 py-2 px-4 block">Sign Out</li></NavLink>
                </div>
            }
        </div>
    );
};

export default DashboardNav;