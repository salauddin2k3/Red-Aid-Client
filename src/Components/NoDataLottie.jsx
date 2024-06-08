import Lottie from "lottie-react";
import MyLottie from "../../public/NoDataLottie.json"
import { Link } from "react-router-dom";


const NoDataLottie = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-28 border border-gray-300 p-7 rounded-xl">
            <div className="mt-10 w-1/2">
                <Lottie
                    animationData={MyLottie}
                    loop={true}
                ></Lottie>
            </div>
            <div className="mt-12">
                <Link to='/donation-requests'><button className="btn text-white mb-4 px-16 bg-[#00929E]">Be a Volunteer</button></Link>
            </div>
        </div>
    );
};

export default NoDataLottie;