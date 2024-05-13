
import { Link } from "react-router-dom";
import {  } from "../Providers/AuthProvider";



const Country = (info) => {

    console.log(info.info.country);


    return (
        <div className="">
            <Link to={`/country-details/${info.info._id}`}>
                <div data-aos="fade-up" data-aos-duration="3000" >
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
                                        <h2 className='text-center text-2xl font-bold '>{info.info.country}</h2>
                                        <h3 className="mt-2 text-sm font-semibold"></h3>
                                        <p className='text-center mt-6 text-base font-medium  font-work'>{info.info.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Country;