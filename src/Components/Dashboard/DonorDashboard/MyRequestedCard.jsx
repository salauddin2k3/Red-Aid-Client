
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyRequestedCard = (info) => {

    // console.log(info.info)
    // const { id } = useParams();

    const { user } = useContext(AuthContext);

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    // const { refetch } = useQuery({
    //     queryKey: ['userData'],
    //     queryFn: async () => {
    //         const res = await axios.get(`https://red-aid.vercel.app/singleRequest/${id}`);
    //         return res.data;
    //     },
    //     enabled: false // This will disable the automatic fetch
    // });

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`https://red-aid.vercel.app/users/${user?.email}`);
            return res.data;
        }
    });

    // console.log(users[0].role);


    const handleDelete = (id) => {
        fetch(`https://red-aid.vercel.app/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // setControl(!control);
                    // alert("Deleted")
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Donation request has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                    navigate(navigateLocation?.state ? navigateLocation.state : '/');
                }
            });
    };

    const handleMakeDone = user => {
        // console.log(user)
        axios.patch(`https://red-aid.vercel.app/status/done/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: `Donor Name: ${user.name} & Donor Email: ${user.email}`,
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Confirm!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Confirmed!",
                                icon: "success"
                            });
                        }
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard');
                }
                else {
                    Swal.fire("Already Done!");
                }
                // refetch();
                // console.log(res.data);
            })
    };

    const handleMakeCancel = user => {
        // console.log(user)
        axios.patch(`https://red-aid.vercel.app/status/cancel/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: `Donor Name: ${user.name} & Donor Email: ${user.email}`,
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Confirm!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Confirmed!",
                                icon: "success"
                            });
                        }
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard');
                }
                else {
                    Swal.fire("Already Done!");
                }
                // refetch();
                // console.log(res.data);
            })
    };


    // console.log(info.info);



    return (
        <div className="" data-aos="fade-up" data-aos-duration="3000" >
            <div className='mx-2'>
                <div className='rounded-xl mt-7 border-[#00929E] border p-6 h-full'>
                    <div>
                        <div className='bg-[#F3F3F3] py-7 px-7 rounded-xl'>
                            <div className='flex justify-center items-center'>
                                <h2 className="text-4xl font-bold">{info.info.recipientName}</h2>
                            </div>
                        </div>
                        <div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row justify-evenly lg:items-center gap-4'>
                                <h2 className="font-medium"><span className="font-bold">District:</span> {info.info.district}</h2>
                                <h2 className="font-medium"><span className="font-bold">Upazila:</span> {info.info.upazilas}</h2>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row justify-between lg:items-center gap-4'>
                                <h2 className="font-medium"><span className="font-bold">Donation Date:</span> {info.info.donationDate}</h2>
                                <h2 className="font-medium"><span className="font-bold">Donation Time:</span> {info.info.donationTime}</h2>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-6 flex flex-col md:flex-col lg:flex-col justify-between lg:items-center gap-4">
                                {
                                    info.info.status === "inprogress"
                                        ?
                                        <div>
                                            <h2 className="font-medium"><span className="font-bold">Donor Name:</span> {info.info.name}</h2>
                                            <h2 className="font-medium"><span className="font-bold">Donor Email:</span> {info.info.email}</h2>
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-center">
                                <div className="mt-4 border border-[#BA006F] p-5 rounded-xl">
                                    <h3 className='text-base font-medium text-[#00929E] font-work'> <span className="font-bold">Status:</span> {info.info.status}</h3>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div>
                                {
                                    users[0]?.role === "volunteer"
                                        ?
                                        ''
                                        :
                                        <div>
                                            <div className="flex justify-center gap-5">
                                                <div className="w-full"><Link to={`/dashboard/request-card-update/${info.info._id}`}><button className="btn bg-[#BA006F] text-white mt-6 w-full">Edit</button></Link></div>
                                                <div className="w-full"><Link><button onClick={() => handleDelete(info.info._id)} className="btn bg-[#BA006F] text-white mt-6 w-full">Delete</button></Link></div>
                                            </div>
                                            <div className=' mt-6 border-b-2 border-dashed'></div>
                                        </div>
                                }
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div>
                                {
                                    info.info.status === "inprogress"
                                        ?
                                        <div className="flex justify-center gap-5">
                                            <div className="w-full"><Link><button onClick={() => handleMakeDone(info.info)} className="btn bg-[#BA006F] text-white mt-6 w-full">Done</button></Link></div>
                                            <div className="w-full"><Link><button onClick={() => handleMakeCancel(info.info)} className="btn bg-[#BA006F] text-white mt-6 w-full">Cancel</button></Link></div>
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <Link to={`/dashboard/reqDetails/${info.info._id}`}><button className="btn bg-[#00929E] text-white mt-6 w-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequestedCard;