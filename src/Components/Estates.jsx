import { useContext, useEffect, useState } from "react";
import Estate from "./Estate";
import { AuthContext } from "../Providers/AuthProvider";


const Estates = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allInfo')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);


    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20">Tourists Spots:</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info?.map(info => <Estate
                        info={info}
                        key={info._id}
                    ></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;