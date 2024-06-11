import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyRequestedCard from "./MyRequestedCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const MyDonationRequest = () => {

    const { user } = useContext(AuthContext);

    // const [info, setInfo] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allRequest/${user?.email}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             // console.log(data);
    //             const filter = data.slice(0, user.length);
    //             // console.log(filter);
    //             setInfo(filter);
    //         });
    // }, [user]);

    const { data: info = []} = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allRequest/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">My Donation Request:</h2>
            <div className="border border-gray-200 px-5 mt-8 rounded-lg">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        info?.map(info => <MyRequestedCard
                            info = {info}
                            key={info._id}
                        ></MyRequestedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyDonationRequest;