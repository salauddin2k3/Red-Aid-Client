import { Link } from "react-router-dom";


const DonationReqCard = (info) => {

    // console.log(info.info);

    return (
        <div className="" data-aos="fade-up" data-aos-duration="3000" >
            <div className='mx-2 bg-white px-8 py-1 rounded-lg pb-8'>
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
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <Link to={`/donationDetails/${info.info._id}`}><button className="btn bg-[#00929E] text-white mt-6 w-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationReqCard;