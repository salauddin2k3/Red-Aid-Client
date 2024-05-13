// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CountryDetails = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState([]);

    console.log(userData);

    // console.log(userData);

    useEffect(() => {
        fetch(`http://localhost:5000/anotherSingleInfo/${id}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [id])

    return (
        <div>
            <h2>Country Details {userData.country}</h2>
        </div>
    );
};

export default CountryDetails;