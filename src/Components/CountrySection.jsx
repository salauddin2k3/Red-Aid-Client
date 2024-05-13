import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Country from "./Country";


const CountrySection = () => {

    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);


    // console.log(info);

    useEffect(() => {
        fetch('http://localhost:5000/anotherAllInfo')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);



    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20">Choose Your Favorite Country:</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info?.map(info => <Country
                        info={info}
                        key={info._id}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default CountrySection;