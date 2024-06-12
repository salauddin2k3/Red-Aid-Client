import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const DashboardHomeCard = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users`);
            return res.data;
        }
    });

    const { data: allReq = [] } = useQuery({
        queryKey: ['allReq'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allRequest`);
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading.........</div>
    }

    // console.log(users.length);
    // console.log(allReq.length);

    return (
        <div className="flex gap-8">
            <div className="max-w-md p-8 mx-auto rounded-lg bg-gray-200 border border-[#00929E] dark:text-gray-800">
                <div className="flex justify-between space-x-8">
                    <span className="font-bold text-4xl ">Total Users:</span>
                </div>
                <div className="mt-4">
                    <h2 className="text-center text-[#00929E] font-bold text-xl">{users.length}</h2>
                </div>
            </div>
            <div className="max-w-md p-8 mx-auto rounded-lg bg-gray-200 border border-[#00929E] dark:text-gray-800">
                <div className="flex justify-between space-x-8">
                    <span className="font-bold text-4xl ">Total Funding:</span>
                </div>
                <div className="mt-4">
                    <h2 className="text-center text-[#00929E] font-bold text-xl">$1200</h2>
                </div>
            </div>
            <div className="max-w-md p-8 mx-auto rounded-lg bg-gray-200 border border-[#00929E] dark:text-gray-800">
                <div className="flex justify-between space-x-8">
                    <span className="font-bold text-4xl ">Total Request:</span>
                </div>
                <div className="mt-4">
                    <h2 className="text-center text-[#00929E] font-bold text-xl">{allReq.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomeCard;