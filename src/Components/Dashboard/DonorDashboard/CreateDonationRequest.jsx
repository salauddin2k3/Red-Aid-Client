import { useContext, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { BsFilePost } from "react-icons/bs";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CreateDonationRequest = () => {

    const { user } = useContext(AuthContext);

    console.log(user.displayName);

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    const [selectedDate, setDate] = useState(null);

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            return res.data;
        }
    });

    console.log(users[0]);


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

    const handleAddSpot = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const recipientName = form.get('recipient-name');
        const district = form.get('district');
        const donationDate = form.get('donation-date');
        const message = form.get('message');
        const hospitalName = form.get('hospital-name');
        const upazilas = form.get('upazilas');
        const donationTime = form.get('donation-time');
        const fullAddress = form.get('full-address');
        const requesterEmail = user?.email;
        const requesterName = user?.displayName;
        const status = "pending";
        const newInfo = { recipientName, district, donationDate, message, hospitalName, upazilas, donationTime, fullAddress, requesterEmail, requesterName, status };

        fetch("http://localhost:5000/donationRequest", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Requested Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard/my-donation-request');
                }
            })
        // console.log(newInfo);
    }

    return (
        <div className="mx-16">
            <Helmet><title>Add Volunteer Post</title></Helmet>
            {
                users[0]?.status === "Block"
                    ?
                    <div><h2 className="text-red-600 font-bold flex justify-center items-center">You Are Blocked!, Please Contact us.</h2></div>
                    :
                    <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg ">
                        <div className="flex items-center justify-center gap-6">
                            <div className="text-3xl text-[#00929E]"><BsFilePost /></div>
                            <h2 className="text-center text-4xl text-[#BA006F] font-bold">Create Donation Request</h2>
                        </div>
                        <form onSubmit={handleAddSpot} action="">
                            <div className="flex gap-10 items-center justify-center mt-12">
                                <div className="w-full">
                                    <div>
                                        <h2 className="text-lg font-semibold text-[#00929E]">Requester Name</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input disabled defaultValue={user.displayName} type="text" name="post-title" className="grow" />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Recipient Name</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="text" name="recipient-name" className="grow" placeholder="Recipient Name" />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg text-[#00929E] font-semibold">Recipient District</h2>
                                        <label className=" mt-2 input input-bordered flex items-center gap-2">
                                            <select defaultValue="district" className="w-full " name="district" id="">
                                                <option disabled value="district">Select Your District</option>
                                                {
                                                    district?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                                }
                                            </select>
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Donation Date</h2>
                                        {/* <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="date" name="deadline" className="grow" placeholder="Deadline" />
                                </label> */}
                                        <label className="mt-2 input input-bordered flex justify-between items-center gap-2">
                                            <Datepicker name="donation-date" dateFormat="dd/MM/yyyy" placeholderText="Select Date" selected={selectedDate} onChange={date => setDate(date)}></Datepicker>
                                            <FaCalendarAlt />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Request Message</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="text" name="message" className="grow" placeholder="Why need blood?" />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    {/* Test */}
                                    <div>
                                        <h2 className="text-lg font-semibold text-[#00929E]">Requester Email</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input disabled defaultValue={user.email} type="text" name="post-title" className="grow" />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Hospital Name</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="text" name="hospital-name" className="grow" placeholder="Hospital Name" />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg text-[#00929E] font-semibold">Recipient Upazila</h2>
                                        <label className=" mt-2 input input-bordered flex items-center gap-2">
                                            <select defaultValue="upazilas" className="w-full " name="upazilas" id="">
                                                <option disabled value="upazilas">Select Your Upazilas</option>
                                                {
                                                    upazilas?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                                }
                                            </select>
                                        </label>
                                    </div>
                                    {/* Test */}
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Donation Time</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="time" name="donation-time" className="grow" placeholder="Donation Time" />
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Full Address Line</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="text" name="full-address" className="grow" placeholder="like: Zahir Raihan Rd, Dhaka" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="btn w-full text-white mt-2 bg-[#BA006F]">Donation Request</button>
                            </div>
                        </form>
                    </div>
            }
        </div>
    );
};

export default CreateDonationRequest;