import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const DonationCardDetails = () => {

    const { id } = useParams();

    const { data: userData = [], refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/singleRequest/${id}`);
            return res.data;
        }
    });



    const handleMakeInprogress = user => {
        // console.log(user)
        axios.patch(`http://localhost:5000/status/inprogress/${user._id}`)
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
                }
                else {
                    Swal.fire("Already Donated!");
                }
                // console.log(res.data);
                refetch();
            })
    };

    return (
        <div className="pt-56" data-aos="fade-up" data-aos-duration="3000" >
            <Helmet><title>Donation Details</title></Helmet>
            <div className="bg-white pt-20 pb-28 rounded-3xl">
                <div className='mx-20 flex justify-center'>
                    <div className='rounded-xl mt-7 w-1/2 border-[#00929E] border p-6 h-full'>
                        <div>
                            <div className='bg-[#F3F3F3] py-7 px-7 rounded-xl'>
                                <div className='flex justify-center items-center'>
                                    <h2 className="text-4xl font-bold">{userData.recipientName}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='mt-6 flex flex-col md:flex-col lg:flex-row justify-evenly lg:items-center gap-4'>
                                    <h2 className="font-medium"><span className="font-bold">District:</span> {userData.district}</h2>
                                    <h2 className="font-medium"><span className="font-bold">Upazila:</span> {userData.upazilas}</h2>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' mt-6 border-b-2 border-dashed'></div>
                                <div className='mt-6 flex flex-col md:flex-col lg:flex-row justify-evenly lg:items-center gap-4'>
                                    <h2 className="font-medium"><span className="font-bold">Donation Date:</span> {userData.donationDate}</h2>
                                    <h2 className="font-medium"><span className="font-bold">Donation Time:</span> {userData.donationTime}</h2>
                                </div>
                                <div className=' mt-6 border-b-2 border-dashed'></div>
                                <div className=' mt-6 border-b-2 border-dashed'></div>
                                <Link><button onClick={() => handleMakeInprogress(userData)} className="btn bg-[#00929E] text-white mt-6 w-full">Donate</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCardDetails;