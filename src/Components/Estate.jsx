
import Aos from "aos";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


Aos.init();



const Estate = (info) => {


    return (
        <div className="" data-aos="fade-up" data-aos-duration="3000" >
            <div className='mx-2'>
                <div className='rounded-xl mt-7 border-[#dddcdc] border p-6 h-full'>
                    <div>
                        <div className='bg-[#F3F3F3] py-7 px-7 rounded-xl'>
                            <div className='flex justify-center items-center'>
                                <img className='rounded-xl' src={info.info.imageUrl} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row lg:items-center gap-4'>
                                {/* <h2 className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit'>Young Adult</h2> */}
                                {/* {
                                        estate.tags.map((tags, idx) => <p className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit' key={idx}>{tags}</p>)
                                    } */}
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-2xl font-bold '>{info.info.spotName}</h2>
                                <h3 className="mt-2 text-sm font-semibold"></h3>
                                <p className='mt-6 text-base font-medium  font-work'>{info.info.description}</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex justify-around items-center">
                                <div><h3 className='text-base font-medium  font-work'> <span className="font-bold">Country:</span> {info.info.country}</h3></div>
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <FaLocationDot />
                                    </div>
                                    <div>
                                        <h3 className='text-base font-medium  font-work'>{info.info.location}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h3 className='text-base font-medium  font-work'> <span className="font-bold">Average Cost:</span> ${info.info.cost}</h3>
                                </div>
                                <div>
                                    <h3 className='text-base font-medium  font-work'><span className="font-bold">Visitors: </span> {info.info.visitor}</h3>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h3 className='text-base font-medium  font-work'> <span className="font-bold">Best Season:</span> {info.info.seasonality}</h3>
                                </div>
                                <div>
                                    <h3 className='text-base font-medium  font-work'><span className="font-bold">Time:</span>  Minimum {info.info.travelTime}</h3>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <Link to={`/details/${info.info._id}`}><button className="btn btn-accent mt-6 w-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;