import { useContext, useEffect, useState, } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import MyListInfo from "./MyListInfo";


const ManageMyPost = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    // console.log(info)

    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myInfo/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);


    return (
        <div className="">
            <Helmet><title>My List</title></Helmet>
            <h2 className="text-5xl font-bold text-center mt-20">My Added Spots:</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info?.map(info => <MyListInfo
                        info={info}
                        key={info._id}
                    ></MyListInfo>)
                }
            </div>
        </div>
    );
};

export default ManageMyPost;