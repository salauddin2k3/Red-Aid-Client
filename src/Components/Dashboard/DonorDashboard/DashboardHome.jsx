
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MyRequestedCard from "./MyRequestedCard";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


const DashboardHome = () => {

    const { user } = useContext(AuthContext);

    // const { data: requestData = [] } = useQuery({
    //     queryKey: ['requestData'],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/allRequest/${user?.email}`);
    //         return res.data;
    //     }
    // });

    const { data: info = [] } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allRequest/${user?.email}`);
            const result = res.data;
            const filter = result.slice(0, 3);
            return filter;
        }
    });

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Test</div>
    }

    console.log(users[0].role);

    return (
        <div className="mb-36">
            <div>
                <h2 className="p-3 font-bold text-center text-4xl">Hello, <span className="text-[#27796f]">{users[0]?.name}</span> ! Welcome to <span><span className="text-red-700">Red</span>Aid</span> <br /> <span className="text-[#BA006F] text-3xl"><Typewriter
                    words={[`where every donor is a hero.`, `where your gift can save lives.`, `where giving is life-saving.`, `where each donor is a life-saver.`, `where your contribution counts.`, `where every drop is precious.`, `where your support means the world.`, `where every donation makes a difference.`, `where generosity meets gratitude.`, `where heroes give blood.`, `where your kindness creates hope.`]}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={1000}
                ></Typewriter></span></h2>
            </div>
            {
                users[0]?.role === "donor"
                    ?
                    <div>
                        <div>
                            {
                                info[0] &&
                                <div className="mx-5">
                                    <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">My Donation Request:</h2>
                                    <div className="border border-gray-200 px-5 mt-8 rounded-lg">
                                        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {
                                                info?.map(info => <MyRequestedCard
                                                    info={info}
                                                    key={info._id}
                                                ></MyRequestedCard>)
                                            }
                                        </div>
                                    </div>
                                    <div className="mt-14 text-center">
                                        <div>
                                            <Link to='/dashboard/my-donation-request'><h2><button className="btn bg-[#BA006F] text-white w-1/3">See All Post<span><FaLongArrowAltRight /></span></button></h2></Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    ''
            }
        </div>
    );
};

export default DashboardHome;