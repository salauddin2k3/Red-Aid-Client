
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../../Providers/AuthProvider";


const DashboardHome = () => {

    const { user } = useContext(AuthContext);

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div className="lg:px-96">
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
        </div>
    );
};

export default DashboardHome;