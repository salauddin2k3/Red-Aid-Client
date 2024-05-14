import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Post from "./Post";


const Posts = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPost')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);


    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">Volunteer Needs Now:</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info?.map(info => <Post
                        info={info}
                        key={info._id}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;