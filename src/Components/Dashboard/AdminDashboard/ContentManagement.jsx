import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import BLogPost from "./BLogPost";


const ContentManagement = () => {

    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allBLogPost`);
            return res.data;
        }
    });

    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <Link to="/dashboard/content-management/add-blog"><button className="btn bg-[#00929E] text-white mt-6 px-8 w-fit">Add Blog</button></Link>
                </div>
            </div>
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

export default ContentManagement;