import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Estate from "./Estate";


const NeedVolunteer = () => {
    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    console.log(info)

    // console.log(info);

    useEffect(() => {
        fetch('http://localhost:5000/allInfo')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);

    const handleSorted = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        if (value === 'low') {
            const sorted = info.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
            setInfo(sorted.slice(0, info.length));
        }
        if (value === 'high') {
            const sorted = info.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
            setInfo(sorted.slice(0, info.length));
        }
    }

    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center mt-20">All Spots:</h2>
            <div className="mt-6 flex justify-end">
                <table>
                    <select onChange={handleSorted} className="select select-ghost w-full max-w-xs border-gray-300 border">
                        <option disabled selected>Find Your Preferred Data</option>
                        <option value={'low'}>Low Budget</option>
                        <option value={'high'}>High Budget</option>
                    </select>
                </table>
            </div>
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

export default NeedVolunteer;