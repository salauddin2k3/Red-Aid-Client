import Lottie from "lottie-react";
import MyLottie from "../../public/LottieFAQ.json"

const LottieFAQ = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="w-1/3">
                    <Lottie
                        animationData={MyLottie}
                        loop={true}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default LottieFAQ;