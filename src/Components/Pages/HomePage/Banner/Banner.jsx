
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'animate.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';

export default function Banner() {
    return (
        <>
            <div>
                <div className="pt-36">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-3xl">
                        <SwiperSlide className='bg-[url("https://i.ibb.co/DpLkNVN/banner.jpg")] bg-no-repeat bg-cover pb-60 pt-28'>
                            <div className='flex justify-end mx-2'>
                                <div className='p-4  lg:p-24  w-fit rounded-2xl  text-center'>
                                    <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-[#27796f]'>Welcome to <span className='font-bold text-black'><span className='text-red-600'>Red</span> Aid</span></h4>
                                    <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-5xl font-extrabold text-[#BA006F]'>Be a Hero, Give the gift of life!</h2></div>
                                    <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-[#27796f]'>Where compassion meets action. Discover volunteer opportunities tailored to your interests. <br />Join a vibrant community dedicated to making a difference. Connect, serve, <br />and impact lives. Start your journey with CareUnity today.
                                    </p>
                                    <button className='animate__animated animate__fadeInLeft mt-7 btn bg-[#BA006F] hover:bg-[#27796f]'><span className='text-white font-bold text-lg'>Join as a donor</span></button>
                                    <button className='ml-2 animate__animated animate__fadeInLeft mt-7 btn bg-[#27796f] hover:bg-[#BA006F]'><span className='text-white font-bold'><FaSearch></FaSearch></span><span className='text-white font-bold text-lg'>Search Donors</span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
