import { useContext } from "react";
import { BsFilePost } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddVolunteerPost = () => {

    const { user } = useContext(AuthContext);

    const navigateLocation = useLocation();
    const navigate = useNavigate();


    const handleAddSpot = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const spotName = form.get('spot-name');
        const location = form.get('location');
        const seasonality = form.get('seasonality');
        const visitor = form.get('visitor');
        const country = form.get('country');
        const cost = form.get('cost');
        const travelTime = form.get('travel-time');
        const imageUrl = form.get('image-url');
        const description = form.get('description');
        const email = user?.email;
        const name = user?.displayName;
        const newInfo = { spotName, location, seasonality, visitor, country, cost, travelTime, imageUrl, description, email, name };

        fetch("http://localhost:5000/addInfo", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    // alert("data added");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/my-list');
                }
            })
        // console.log(newInfo);
    }

    return (
        <div className="">
            <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg ">
                <div className="flex items-center justify-center gap-6">
                    <div className="text-3xl text-[#00929E]"><BsFilePost /></div>
                    <h2 className="text-center text-4xl text-[#BA006F] font-bold">Add Volunteer Post</h2>
                </div>
                <form onSubmit={handleAddSpot} action="">
                    <div className="flex gap-10 items-center justify-center mt-12">
                        <div className="w-full">
                            <div>
                                <h2 className="text-lg font-semibold text-[#00929E]">Post Title</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="spot-name" className="grow" placeholder="Post Title" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Location</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="location" className="grow" placeholder="Location" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Seasonality</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="seasonality" className="grow" placeholder="Seasonality" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Total Visitors Per Year</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="visitor" className="grow" placeholder="Total Visitors Per Year" />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            {/* Test */}
                            <div>
                                <h2 className="text-lg text-[#00929E] font-semibold">Category</h2>
                                <label className=" mt-2 input input-bordered flex items-center gap-2">
                                    <select className="w-full " name="country" id="">
                                        <option disabled selected>Select Category</option>
                                        <option>Healthcare</option>
                                        <option>Education</option>
                                        <option>Social Service</option>
                                        <option>Environmental Conservation</option>
                                        <option>Animal Welfare</option>
                                        <option>Arts & Culture</option>
                                        <option>Elderly Care</option>
                                        <option>Youth Development</option>
                                        <option>Disaster Relief</option>
                                        <option>Community Development</option>
                                    </select>
                                </label>
                            </div>
                            {/* Test */}
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Average Cost</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="number" name="cost" className="grow" placeholder="Cost" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Travel Time</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="travel-time" className="grow" placeholder="Travel Time" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Spot Image Url</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="image-url" className="grow" placeholder="image url" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg text-[#00929E] font-semibold">Short Description</h2>
                        <label className="mt-2 input input-bordered flex items-center gap-2">
                            <input type="text" name="description" className="grow" placeholder="short description" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <button className="btn w-full text-white mt-2 bg-[#BA006F]">Add Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;