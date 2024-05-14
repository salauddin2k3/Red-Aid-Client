
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState([]);

    // console.log(userData);

    useEffect(() => {
        fetch(`https://infinity-care.vercel.app/singlePost/${id}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [id])

    return (
        <div className="mt-16 border border-[#BA006F] px-8 py-10 rounded-2xl">
            <Helmet><title>Post Details</title></Helmet>
            <div className=" mx-2 flex flex-col items-center gap-11">
                <div className="w-full p-4 lg:p-16 bg-[#1313130d] rounded-xl flex justify-center">
                    <img className="w-fit rounded-xl" src={userData.thumbnail} alt="" />
                </div>
                <div className="p-3 flex flex-col lg:flex-col gap-4">
                    <div className="w-fll border-2 border-gray-400 rounded-lg p-9">
                        <h1 className="text-3xl text-center lg:text-4xl font-bold text-[#131313] font-playfire">{userData.postTitle}</h1>
                        <div className="flex items-center mt-4 justify-center gap-20">
                            <h2 className="text-2xl font-bold  font-work">Category: {userData.category}</h2>
                            <div className="flex items-center gap-3">
                                    <div>
                                        <FaLocationDot className="text-xl " />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-bold  font-work'>{userData.location}</h3>
                                    </div>
                                </div>
                        </div>
                        <p className="mt-4 text-center text-xl font-medium  font-work">{userData.description} </p>
                    </div>
                    <div className="w-full border-2 flex flex-col items-center border-gray-400 rounded-lg p-9">
                        <p className="mt-4 text-lg font-bold  font-work">Deadline : {userData.deadline} </p>
                        <p className="mt-4 text-lg font-bold  font-work">Needed Volunteers:  ({userData.volunteersNeeded}) </p>
                    </div>
                    <Link to={`/be-a-volunteer/${userData._id}`}><button className="btn bg-[#BA006F] text-white w-full">Be a Volunteer</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;