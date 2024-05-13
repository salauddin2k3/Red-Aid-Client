import Lottie from "lottie-react";
import MyLottie from "../../public/lottie-react.json"
import { Typewriter } from "react-simple-typewriter";


const LottieReact = () => {
    return (
        <div className=" mt-28 border border-gray-300 p-7 rounded-xl">
            <div>
                <h2 className="border border-gray-200 rounded-full p-3 font-bold text-center text-4xl">{`Let's`} <span className="text-secondary"><Typewriter
                    words={['explore the world', 'discover the world', 'journey through the world', 'traverse the world', 'adventure around the world', 'wander the world']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={1000}
                ></Typewriter></span></h2>
            </div>
            <div className="mt-10 w-full">
                <Lottie
                    animationData={MyLottie}
                    loop={true}
                ></Lottie>
            </div>
        </div>
    );
};

export default LottieReact;