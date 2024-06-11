import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const RequestCardUpdate = () => {

    const [selectedDate, setDate] = useState(null);

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


    const { id } = useParams();

    const [userData, setUserData] = useState([]);

    // console.log(userData);

    useEffect(() => {
        fetch(`http://localhost:5000/singleRequest/${id}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [id]);

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    const handleUpdate = e => {
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
        const newInfo = { recipientName, district, donationDate, message, hospitalName, upazilas, donationTime, fullAddress};

        fetch(`http://localhost:5000/updateRequest/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.matchedCount > 0) {
                    // console.log(data);
                    // alert("data Update")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Request Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard/my-donation-request');
                }
            })
    };


    return (
        <div>
            <div className="">
                <Helmet><title>Update Request</title></Helmet>
                <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg ">
                    <div className="flex items-center justify-center gap-6">
                        {/* <div className="text-3xl text-[#00929E]"><MdBrowserUpdated /></div> */}
                        <h2 className="text-center text-4xl text-[#BA006F] font-bold">Update Your Request</h2>
                    </div>
                    <form onSubmit={handleUpdate} action="">
                        <div className="mt-4">
                            <h2 className="text-lg text-[#00929E] font-semibold">Recipient Name</h2>
                            <label className="mt-2 input input-bordered flex items-center gap-2">
                                <input type="text" defaultValue={userData.recipientName} name="recipient-name" className="grow" placeholder={userData.recipientName} />
                            </label>
                        </div>
                        <div className="flex gap-10 items-center justify-center mt-4">
                            <div className="w-full">
                                <div className="mt-4">
                                    <h2 className="text-lg text-[#00929E] font-semibold">Recipient District</h2>
                                    <label className=" mt-2 input input-bordered flex items-center gap-2">
                                        <select required defaultValue="district" className="w-full " name="district" id="">
                                            <option disabled value="district">{userData.district}</option>
                                            {
                                                district?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                            }
                                        </select>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Hospital Name</h2>
                                    <label className="mt-2 input input-bordered flex items-center gap-2">
                                        <input defaultValue={userData.hospitalName} required type="text" name="hospital-name" className="grow" placeholder={userData.hospitalName} />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Donation Date</h2>
                                    {/* <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="date" name="deadline" className="grow" placeholder="Deadline" />
                                </label> */}
                                    <label defaultValue={userData.donationDate} className="mt-2 input input-bordered flex justify-between items-center gap-2">
                                        <Datepicker required name="donation-date" dadateFormat="MM/dd/yyyy" placeholderText={userData.donationDate} selected={selectedDate} onChange={date => setDate(date)}></Datepicker>
                                        <FaCalendarAlt />
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mt-4">
                                    <h2 className="text-lg text-[#00929E] font-semibold">Recipient Upazila</h2>
                                    <label className=" mt-2 input input-bordered flex items-center gap-2">
                                        <select required defaultValue="upazilas" className="w-full " name="upazilas" id="">
                                            <option disabled value="upazilas">{userData.upazilas}</option>
                                            {
                                                upazilas?.map(districtData => <option key={districtData.id}>{districtData.name}</option>)
                                            }
                                        </select>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Full Address Line</h2>
                                    <label className="mt-2 input input-bordered flex items-center gap-2">
                                        <input defaultValue={userData.fullAddress} required type="text" name="full-address" className="grow" placeholder={userData.fullAddress} />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Donation Time</h2>
                                    <label className="mt-2 input input-bordered flex items-center gap-2">
                                        <input defaultValue={userData.donationTime} required type="time" name="donation-time" className="grow" placeholder={userData.donationTime} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-[#00929E]">Request Message</h2>
                            <label className="mt-2 input input-bordered flex items-center gap-2">
                                <input required defaultValue={userData.message} type="text" name="message" className="grow" placeholder={userData.message} />
                            </label>
                        </div>
                        <div className="mt-4">
                            <button className="btn w-full mt-2 bg-[#BA006F] text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestCardUpdate;