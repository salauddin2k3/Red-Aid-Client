import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Post from "./Post";
import { Helmet } from "react-helmet-async";
import NoDataLottie from "./NoDataLottie";


const NeedVolunteer = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    const [search, setSearch] = useState('');
    // console.log(search);

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
            <Helmet><title>Need Volunteer</title></Helmet>
            <h2 className="text-5xl font-bold text-center mt-20">Volunteer Needs Now:</h2>
            <div className="mt-8">
                <form onChange={(e) => setSearch(e.target.value)} action="">
                    <label className="flex gap-1 justify-center">
                        <input className="input input-bordered w-1/4" placeholder="Search Your Data" />
                        {/* <button disabled className="btn bg-[#BA006F] text-white">Search</button> */}
                    </label>
                </form>
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info.length
                        ?
                        info.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.postTitle.toLowerCase().includes(search)
                        }).map(info => <Post
                            info={info}
                            key={info._id}
                        ></Post>)
                        :
                        <NoDataLottie></NoDataLottie>
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;