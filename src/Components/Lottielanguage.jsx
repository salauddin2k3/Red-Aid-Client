import Lottie from "lottie-react";
import MyLottie from "../../public/MultiLanguage.json"

const Lottielanguage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-10 w-32">
                    <Lottie
                        animationData={MyLottie}
                        loop={true}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Lottielanguage;