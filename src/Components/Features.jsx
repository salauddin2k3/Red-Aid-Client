import LottieManagment from "./LottieManagment";
import LottieTimeManage from "./LottieTimeManage";
import Lottielanguage from "./Lottielanguage";


const Features = () => {
    return (
        <div className="mt-20 border border-gray-300 rounded-2xl px-6 pb-6">
            <section className="rounded-xl dark:bg-gray-100 dark:text-gray-800 pb-16">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold mt-8" data-sider-select-id="6cb6768c-aac7-49bf-88c0-e776e8fd061d">Built to empower every team</h2>
                    <p className="dark:text-gray-600 pt-2">Your path to success starts here. Collaborate, innovate, and achieve greatness with our powerful platform. <br /> Unleash your <span>{`team's`}</span> potential today.</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <LottieManagment></LottieManagment>
                        <h3 className="text-center my-3 text-3xl font-semibold">Event Management</h3>
                        <p className="text-center">Provide tools for organizations to manage volunteer events, including scheduling, attendee tracking.</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <Lottielanguage></Lottielanguage>
                        <h3 className="text-center my-3 text-3xl font-semibold">Multi-Language Support</h3>
                        <p className="text-center">Provide support for multiple languages to make the website accessible to a diverse range of users.</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <LottieTimeManage></LottieTimeManage>
                        <h3 className="my-3 text-center text-3xl font-semibold">Time Management</h3>
                        <p className="text-center">Organize, prioritize, and optimize your time for maximum productivity and success.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;