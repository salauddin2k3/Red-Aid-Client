
import { useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MyRequestedCard from "./MyRequestedCard";


const DashboardHome = () => {

    const { user } = useContext(AuthContext);

    // const { data: requestData = [] } = useQuery({
    //     queryKey: ['requestData'],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/allRequest/${user?.email}`);
    //         return res.data;
    //     }
    // });

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            return res.data;
        }
    });

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allRequest/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                const filter = data.slice(0, 3);
                // console.log(filter);
                setInfo(filter);
            });
    }, [user]);

    console.log(info[0]);

    return (
        <div className="">
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
                info[0] &&
                <div className="">
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
                </div>
            }
        </div>
    );
};

export default DashboardHome;