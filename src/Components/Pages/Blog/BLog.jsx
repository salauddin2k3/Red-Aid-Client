import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "./BlogCard";

const BLog = () => {

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get(`https://red-aid.vercel.app/allBlog/sorted`);
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(posts);

    return (
        <div className="pt-24">
            <div className="mt-20 flex justify-center">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        posts?.map(post => <BlogCard
                            key={post._id}
                            post={post}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BLog;