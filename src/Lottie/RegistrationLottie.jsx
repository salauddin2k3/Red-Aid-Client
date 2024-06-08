import Lottie from "lottie-react";
import LottieAnimation from "../../public/LottieFAQ.json"

const RegistrationLottie = () => {
    return (
        <div className="">
            <div className="w-9/12">
                <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                ></Lottie>
            </div>
        </div>
    );
};

export default RegistrationLottie;