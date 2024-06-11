import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MyRequestedCard from "../DonorDashboard/MyRequestedCard";


const AllDonationRequest = () => {

    const { data: info = [] } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allRequest`);
            return res.data;
        }
    });

    console.log(info);


    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">All Donation Request:</h2>
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
    );
};

export default AllDonationRequest;