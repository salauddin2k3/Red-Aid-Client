import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Test = () => {


    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    console.log(info);

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
            <h2 className="text-red-600 font-extrabold">test.....</h2>
        </div>
    );
};

export default Test;