import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
// import {useNavigate } from "react-router-dom";


const Updates = () => {

    const { user, UserUpdateProfile, setUser } = useContext(AuthContext);

    // console.log(user)

    // const location = useLocation();
    // const navigate = useNavigate();


    const handleChangedProfile = e => {
        // e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const url = form.get('url');
        // console.log(name, url);



        // Update
        UserUpdateProfile(name, url)
            .then(() => {
                setUser((user) => ({
                    ...user, displayName: name, photoURL: url
                }))
                // console.log(result.user)
                alert('User Saved Successfully');

                // Navigate
                // navigate(user ? '/login' : '/update');

            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            })


    }


    return (
        <div className="mt-20 ">
            <Helmet><title>Update Profile</title></Helmet>
            <div className="bg-[#fdf9f8] rounded-2xl">
                <div className="flex flex-col lg:flex-row p-4 lg:p-28 gap-16">
                    <div className="border-2 p-7 rounded-2xl border-[#f7614d]">
                        <img className="w-fit lg:w-72 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" />
                        <div><h2 className="text-3xl text-center mt-3 font-bold"><span>{user?.displayName || "Null"}</span></h2></div>
                        <div><h2 className="text-lg text-center mt-2 font-bold"><span>{user?.email || "Null"}</span></h2></div>
                    </div>
                    <div className="border-2 p-7 rounded-2xl border-[#f7614d] w-full lg:w-2/3 flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-center">Update Profile</h1>
                        <div className=" mt-7 w-2/3">
                            <form onSubmit={handleChangedProfile} className="text-center" action="">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="name" className="block dark:text-gray-600 text-xl font-semibold">Name</label>
                                    <input type="text" name="name" id="name" required placeholder="Your Name" className="border border-gray-700 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-1 text-sm mt-3">
                                    <label htmlFor="email" className="block dark:text-gray-600 text-xl font-semibold">Photo Url</label>
                                    <input type="text" name="url" id="url" placeholder="Photo-url" className="border border-gray-700 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="flex justify-center">
                                    <button className="mt-7 rounded-lg block px-7 p-3 text-center dark:text-gray-50 dark:bg-violet-600">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates;