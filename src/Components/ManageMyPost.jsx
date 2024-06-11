import { useContext, useEffect, useState, } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import MyListInfo from "./MyListInfo";
import MyVolunteerRequest from "./MyVolunteerRequest";
import NoDataLottie from "./NoDataLottie";


const ManageMyPost = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);
    const [anotherInfo, setAnotherInfo] = useState([]);
    // console.log(anotherInfo);

    // console.log(info)

    // console.log(user);

    useEffect(() => {
        fetch(`https://infinity-care.vercel.app/myInfo/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);

    useEffect(() => {
        fetch(`https://infinity-care.vercel.app/myAnotherInfo/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setAnotherInfo(data);
            });
    }, [user]);


    return (
        <div className="">
            <Helmet><title>Manage Post</title></Helmet>
            <div>
                <h2 className="text-5xl font-bold text-center mt-20 text-[#00929E]">My Need Volunteer Post:</h2>
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        info?.map(info => <MyListInfo
                            info={info}
                            key={info._id}
                        ></MyListInfo>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-bold text-center mt-20 text-[#BA006F]">My Volunteer Request Post:</h2>
                {/* <NoDataLottie></NoDataLottie> */}
                <div>
                    {/* {
                        anotherInfo
                            ?
                            <div>
                                <NoDataLottie></NoDataLottie>
                            </div>
                            :
                            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    anotherInfo?.map(anotherInfo => <MyVolunteerRequest
                                        anotherInfo={anotherInfo}
                                        key={anotherInfo._id}
                                    ></MyVolunteerRequest>)
                                }
                            </div>
                    } */}
                    {/* <div>
                        {
                            anotherInfo?.map(anotherInfo => <MyVolunteerRequest
                                anotherInfo={anotherInfo}
                                key={anotherInfo._id}
                            ></MyVolunteerRequest>)
                        }
                    </div> */}
                    {
                        anotherInfo.length
                        ? 
                        anotherInfo.map(anotherInfo => <MyVolunteerRequest
                            anotherInfo={anotherInfo}
                            key={anotherInfo._id}
                        ></MyVolunteerRequest>)
                        :
                        <NoDataLottie></NoDataLottie>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageMyPost;