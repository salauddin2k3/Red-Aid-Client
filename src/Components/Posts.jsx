
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BLogPost from "./Dashboard/AdminDashboard/BLogPost";


const Posts = () => {


    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allBLogPost`);
            return res.data;
        }
    });



    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">Volunteer Needs Now:</h2>
            <div className="mt-20 flex justify-center">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        posts?.map(post => <BLogPost
                            key={post._id}
                            post={post}
                        ></BLogPost>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Posts;