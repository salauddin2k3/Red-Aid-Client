import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavIcon from "../../../../public/logo.png"
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);




    const navLinks = <>

        <li><NavLink to={'/'}><span className=" text-base font-medium">Home</span></NavLink></li>
        <li><NavLink to={'/donation-requests'}><span className="text-base font-medium ">Blood Donation Requests</span></NavLink></li>
        <li><NavLink to={'/blog'}><span className="text-base font-medium ">Blog</span></NavLink></li>
        <li>{user && <NavLink to={'/funding'}><span className="text-base font-medium ">Funding Links</span></NavLink>}</li>
        {/* <li><NavLink to={'/update'}><span className="text-base font-medium ">Update Profile</span></NavLink></li> */}

    </>


    return (
        <div className="fixed container mx-auto bg-gray-50 pb-2 rounded-3xl border-b-2 border-[#BA006F] z-50">
            <div className="">
                <div className="navbar pl-8">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <NavLink to={'/'}>
                            <div className="flex items-center gap-2">
                                <img className="w-64" src={NavIcon} alt="" />
                                {/* <a className="text-lg md:text-2xl lg:text-4xl font-extrabold "><span className="text-[#00929E]">Infinity</span> <span className="text-[#BA006F]">Care</span></a> */}
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* Dark Theme.........Start */}
                        <div className="mr-5 hidden">
                            <label className="swap swap-rotate">

                                <input type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                    className="theme-controller" value="synthwave" />

                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                        {/* Dark Theme...........End */}
                        {
                            user
                                ?
                                ""
                                :
                                <div>
                                    <NavLink to={'/login'}><span className="mr-7 text-[#BA006F] text-base font-medium ">Login</span></NavLink>
                                    <NavLink to={'/reg'}><span className="btn text-base text-white font-medium bg-[#BA006F] ">Sign up</span></NavLink>
                                </div>

                        }
                        {/* {userLogin}
                        <div onClick={handleSignOut}><span className="btn text-base font-medium text-[#1E1E1E]">Sign out</span></div> */}
                        <div className="mr-10">
                            <details className="dropdown dropdown-end">
                                <summary className="m-1 btn btn-ghost btn-circle w-14">
                                    <div className="">
                                        {
                                            user
                                                ?
                                                <div className="tooltip" data-tip={user?.displayName || "Unknown"}>
                                                    <img className="rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                                    {/* <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-sm font-bold border w-fit border-orange-900 bg-orange-500 text-center text-white">{user?.displayName || "Unknown"}</p>
                                    </div> */}
                                                </div>
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><NavLink to={'/dashboard'}><span className="text-base font-medium ">Dashboard</span></NavLink></li>
                                    <li className="">
                                        <div onClick={logOut}><span className="btn text-sm lg:text-base text-white font-medium bg-[#BA006F] ">Sign out</span></div>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;