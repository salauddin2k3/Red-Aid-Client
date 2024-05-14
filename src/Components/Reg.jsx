import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";


const Reg = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, UserUpdateProfile } = useContext(AuthContext)

    const userLogin = <>

        <NavLink to={'/login'}><span className="text-xs text-center font-bold sm:px-6 dark:text-gray-600 underline">Login</span></NavLink>

    </>


    const handleReg = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const url = form.get('url');
        const password = form.get('password');
        // console.log(name, email, url, password);

        // Reset Error & Success
        setRegError('');
        setRegSuccess('');

        if (password.length < 6) {
            setRegError('Password must be at least 6 characters long');
            if (!/[A-Z]/.test(password)) {
                setRegError('Password must contain at least one uppercase letter');
                return;
            }
            if (!/[a-z]/.test(password)) {
                setRegError('Password must contain at least one lowercase letter');
                return;
            }
            return;
        }


        // Create User
        createUser(email, password, name, url)
            .then(result => {

                console.log(result.user)
                setRegSuccess('User Created Successfully');
                // alert('User Created Successfully');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                UserUpdateProfile(name, url);

                // Navigate
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
                alert(error.message);
            })
    }



    return (
        <div className="mt-32 flex items-center justify-center ">
            <Helmet><title>Registration with Infinity Care</title></Helmet>
            <div>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Registration</h1>
                    <form onSubmit={handleReg} noValidate="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                            <input type="text" name="name" id="name" required placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="name" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Photo Url</label>
                            <input type="text" name="url" id="url" placeholder="url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="relative space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            <span className="absolute right-3 bottom-8 text-lg text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div>
                            {
                                regError && <p className="text-red-600">{regError}</p>
                            }
                            {
                                regSuccess && <p className="text-green-500">{regSuccess}</p>
                            }
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do you have an account?
                        {userLogin}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reg;