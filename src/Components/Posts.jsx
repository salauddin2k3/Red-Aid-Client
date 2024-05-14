import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Post from "./Post";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Posts = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPost')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                const filter = data.slice(0, 6);
                // console.log(filter);
                setInfo(filter);
            });
    }, [user]);



    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">Volunteer Needs Now:</h2>
            <div className="border border-gray-200 px-5 mt-8 rounded-lg">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        info?.map(info => <Post
                            info={info}
                            key={info._id}
                        ></Post>)
                    }
                </div>
                <div className="mt-10 mb-8 text-center">
                    <Link to='/need-volunteer'><h2><button className="btn bg-[#BA006F] text-white w-1/3">See All Post<span><FaLongArrowAltRight /></span></button></h2></Link>
                </div>
            </div>
        </div>
    );
};

export default Posts;