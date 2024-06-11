import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MyRequestedCard from "./MyRequestedCard";


const MyDonationRequest = () => {

    const { user } = useContext(AuthContext);

    const { data: requestData = [] } = useQuery({
        queryKey: ['requestData'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allRequest/${user?.email}`);
            return res.data;
        }
    });

    console.log(requestData[0]);

    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">My Donation Request:</h2>
            <div className="border border-gray-200 px-5 mt-8 rounded-lg">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {
                        info?.map(info => <Post
                            info={info}
                            key={info._id}
                        ></Post>)
                    } */}
                    {
                        requestData?.map(requestData => <MyRequestedCard
                            requestData = {requestData}
                            key={requestData._id}
                        ></MyRequestedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyDonationRequest;