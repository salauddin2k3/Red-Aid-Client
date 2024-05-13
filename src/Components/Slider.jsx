
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'animate.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div>
                <div className="mt-10">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-3xl">
                        <SwiperSlide className='bg-[url("https://i.ibb.co/S62Mv2J/Firefly-A-group-of-cheerful-volunteers-is-shown-donating-blood-in-this-picture-The-image-reflects-t.jpg")] bg-no-repeat bg-cover py-40'>
                            <div className='flex justify-center mx-2'>
                                <div className='p-4  lg:p-24 border border-accent w-fit rounded-2xl bg-gray-600 bg-opacity-40 text-center'>
                                    <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold text-accent'>Infinity Care</span></h4>
                                    <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-[#BA006F]'>Where Compassion Unites Us All!</h2></div>
                                    <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Where compassion meets action. Discover volunteer opportunities tailored to your interests. <br />Join a vibrant community dedicated to making a difference. Connect, serve, <br />and impact lives. Start your journey with CareUnity today.
                                    </p>
                                    <button className='animate__animated animate__fadeInLeft mt-7 btn btn-accent  btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[url("https://i.ibb.co/h9DhJgN/Firefly-Group-of-happy-volunteers-planting-tree-in-park-volunteering-charity-people-and-ecology-conc.jpg")] bg-no-repeat bg-cover py-40'>
                            <div className='flex justify-center mx-2'>
                                <div className='p-4  lg:p-24 border border-accent w-fit rounded-2xl bg-gray-600 bg-opacity-40 text-center'>
                                    <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold text-[#BA006F]'>Infinity Care</span></h4>
                                    <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-accent'>Where Compassion Unites Us All!</h2></div>
                                    <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Where compassion meets action. Discover volunteer opportunities tailored to your interests. <br />Join a vibrant community dedicated to making a difference. Connect, serve, <br />and impact lives. Start your journey with CareUnity today.
                                    </p>
                                    <button className='animate__animated animate__fadeInLeft mt-7 btn btn-accent  btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[url("https://i.ibb.co/M542yWJ/Firefly-I-require-a-realistic-background-image-for-my-volunteering-website-that-prominently-showcase.jpg")] bg-no-repeat bg-cover py-40'>
                            <div className='flex justify-center mx-2'>
                                <div className='p-4  lg:p-24 border border-accent w-fit rounded-2xl bg-gray-600 bg-opacity-40 text-center'>
                                    <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold text-[#BA006F]'>Infinity Care</span></h4>
                                    <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-accent'>Where Compassion Unites Us All!</h2></div>
                                    <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Where compassion meets action. Discover volunteer opportunities tailored to your interests. <br />Join a vibrant community dedicated to making a difference. Connect, serve, <br />and impact lives. Start your journey with CareUnity today.
                                    </p>
                                    <button className='animate__animated animate__fadeInLeft mt-7 btn btn-accent  btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
