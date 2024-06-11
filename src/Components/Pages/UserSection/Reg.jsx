import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Reg = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // District---------------------------

    const { data: district } = useQuery({
        queryKey: ['district'],
        queryFn: async () => {
            const res = await fetch('/public/districts.json');
            return res.json();
        }
    });


    // Upazilas---------------------------

    const { data: upazilas } = useQuery({
        queryKey: ['upazilas'],
        queryFn: async () => {
            const res = await fetch('/public/upazilas.json');
            return res.json();
        }
    });




    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);

    const { createUser, UserUpdateProfile } = useContext(AuthContext)

    const userLogin = <>

        <NavLink to={'/login'}><span className="text-xs text-center font-bold sm:px-6 dark:text-gray-600 underline">Login</span></NavLink>

    </>


    const handleReg = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const bloodGroup = form.get("bloodGroup");
        const upazilas = form.get("upazilas");
        const district = form.get("district");
        const url = form.get('url');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        const role = "donor";
        const status = "Active";
        // console.log(email, password, name, url, bloodGroup, upazilas, district);

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
        if (password === confirmPassword) {
            setRegError('Confirm Password Wrong');
            return;
        }


        // Create User
        createUser(email, password, name, url, bloodGroup, upazilas, district, role, status)
            .then(result => {

                // Create user entry in the database
                const userInfo = {
                    name: name,
                    email: email,
                    url: url,
                    bloodGroup: bloodGroup,
                    upazilas: upazilas,
                    district: district,
                    role: role,
                    status: status
                }

                axios.post('http://localhost:5000/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
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
                        }
                    })

                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
                alert(error.message);
            })
    }



    return (
        <div className="pt-52 flex items-center justify-center ">
            <Helmet><title>Registration | Red Aid</title></Helmet>
            <div>
                <div className="w-full  px-9 py-10 space-y-5 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-2xl">
                    <h1 className="text-2xl font-bold text-center">Registration</h1>
                    <form onSubmit={handleReg} noValidate="" className="space-y-6">
                        <div className="flex gap-10">
                            <div className="w-full">
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                                    <input  type="text" name="name" id="name" required placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" />
                                </div>
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="name" className="block dark:text-gray-600 pb-1">Blood Group</label>
                                    <label className="">
                                        <select required defaultValue="Select Blood Group" className="w-full px-3 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" name="bloodGroup" >
                                            <option disabled value="Select Blood Group">Select Blood Group</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="email" className="block dark:text-gray-600 pb-1">Upazila</label>
                                    <label className="">
                                        <select required defaultValue={"upazila"} className="w-full px-3 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" name="upazilas" >
                                            <option disabled value="upazila">Select Your Upazila</option>
                                            {
                                                upazilas?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                            }
                                        </select>
                                    </label>
                                </div>
                                <div className="relative space-y-1 text-sm pb-2">
                                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                    <input required type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" />
                                    <span className="absolute right-3 bottom-5 text-lg text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                                    <input required type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" />
                                    {/* <input type="text" name="name" id="name" required placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" /> */}
                                </div>
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="email" className="block dark:text-gray-600 pb-1">District</label>
                                    <label className="">
                                        <select defaultValue={"district"} className="w-full px-3 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" name="district" >
                                            <option required disabled value="district">Select Your District</option>
                                            {
                                                district?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                            }
                                        </select>
                                    </label>
                                    {/* <input type="email" name="email" id="name" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" /> */}
                                </div>
                                <div className="space-y-1 text-sm pb-2">
                                    <label htmlFor="email" className="block dark:text-gray-600">Photo Url</label>
                                    <input required type="text" name="url" id="url" placeholder="url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" />
                                </div>
                                <div className="relative space-y-1 text-sm pb-2">
                                    <label htmlFor="password" className="block dark:text-gray-600">Confirm Password</label>
                                    <input required type={showPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border border-gray-300" />
                                    <span className="absolute right-3 bottom-5 text-lg text-gray-600" onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
                                        {
                                            confirmShowPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
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