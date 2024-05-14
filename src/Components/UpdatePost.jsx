import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdBrowserUpdated } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";



const UpdatePost = () => {

    const { id } = useParams();

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);

    const [selectedDate, setDate] = useState(null);

    // console.log(userData);

    useEffect(() => {
        fetch(`http://localhost:5000/singlePost/${id}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [id])

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const postTitle = form.get('post-title');
        const location = form.get('location');
        const thumbnail = form.get('thumbnail');
        const category = form.get('category');
        const volunteersNeeded = form.get('needed-volunteer');
        const deadline = form.get('deadline');
        const description = form.get('description');
        const newInfo = { postTitle, location, thumbnail, category, volunteersNeeded, deadline, description };

        fetch(`http://localhost:5000/updatePost/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.matchedCount > 0) {
                    console.log(data);
                    // alert("data Update")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Post Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/my-post');
                }
            })
    };

    return (
        <div className="">
            <Helmet><title>Update Post</title></Helmet>
            <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg ">
                <div className="flex items-center justify-center gap-6">
                    <div className="text-3xl text-[#00929E]"><MdBrowserUpdated /></div>
                    <h2 className="text-center text-4xl text-[#BA006F] font-bold">Update Your Post</h2>
                </div>
                <form onSubmit={handleUpdate} action="">
                    <div className="flex gap-10 items-center justify-center mt-12">
                        <div className="w-full p-4 lg:p-16 bg-[#1313130d] rounded-xl flex justify-center">
                            <img className="w-fit rounded-xl" src={userData.thumbnail} alt="" />
                        </div>
                        <div className="w-full">
                            <div>
                                <h2 className="text-lg font-semibold">Post Title</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" defaultValue={userData.postTitle} name="post-title" className="grow" placeholder="Tourists Spot Name" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Location</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" defaultValue={userData.location} name="location" className="grow" placeholder="Location" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Deadline</h2>
                                <label className="mt-2 input input-bordered flex justify-between items-center gap-2">
                                    <Datepicker name="deadline" dateFormat="dd/MM/yyyy" placeholderText="Select Date" selected={selectedDate} onChange={date => setDate(date)}></Datepicker>
                                    <FaCalendarAlt />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Organizer Name</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" disabled defaultValue={userData.name} name="or-name" className="grow" placeholder="Or Name" />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <div>
                                <h2 className="text-lg font-semibold">Category</h2>
                                <label className=" mt-2 input input-bordered flex items-center gap-2">
                                    <select defaultValue={userData.category} className="w-full " name="category" id="">
                                        {/* <option disabled selected>Select Category</option> */}
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
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">No. of volunteers needed</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" defaultValue={userData.volunteersNeeded} name="needed-volunteer" className="grow" placeholder="needed-volunteer" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Thumbnail Url</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" defaultValue={userData.thumbnail} name="thumbnail" className="grow" placeholder="thumbnail" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Organizer Email</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" disabled defaultValue={userData.email} name="travel-time" className="grow" placeholder="Travel Time" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Short Description</h2>
                        <label className="mt-2 input input-bordered flex items-center gap-2">
                            <input type="text" defaultValue={userData.description} name="description" className="grow" placeholder="short description" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <button className="btn w-full mt-2 bg-[#BA006F] text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;