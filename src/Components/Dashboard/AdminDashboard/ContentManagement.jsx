import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import BLogPost from "./BLogPost";
import { useState } from "react";


const ContentManagement = () => {

    const [filter, setFilter] = useState('All');

    const { data: posts = [], isLoading, error } = useQuery({
        queryKey: ['posts', filter],
        queryFn: async () => {
            const res = await axios.get(`https://red-aid.vercel.app/allBLogPost`);
            if (filter === 'All') return res.data;
            return res.data.filter(post => post.status === filter.toLowerCase());
        }
    });

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts</div>;
    }

    return (
        <div>
            <div className="flex justify-center items-center mt-6 gap-6">
                <div className="">
                    <div className="">
                        <select value={filter} onChange={handleFilterChange} className="select select-bordered">
                            <option disabled value="Select One">Select Option</option>
                            <option value="All">All</option>
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Link to="/dashboard/content-management/add-blog"><button className="btn bg-[#00929E] text-white  px-8 w-fit">Add Blog</button></Link>
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