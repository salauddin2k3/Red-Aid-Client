import bgVideo from "../assets/Videos/bg-video.mp4"
// import bgImage from "../assets/bg.jpg"

const BgProvider = () => {
    return (
        <div>
            <div className="disabled -z-50">
                <video autoPlay loop muted className="w-full min-h-screen -z-50 fixed">
                    <source src={bgVideo} />
                </video>
                {/* <img className="" src={bgImage} alt="" /> */}
            </div>
            
            {/* <div className="fixed inset-0 bg-white opacity-45 -z-40"></div> */}
        </div>
    );
};

export default BgProvider;