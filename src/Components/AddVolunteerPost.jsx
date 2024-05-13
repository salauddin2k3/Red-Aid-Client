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
        const postTitle = form.get('post-title');
        const location = form.get('location');
        const thumbnail = form.get('thumbnail');
        const category = form.get('category');
        const volunteersNeeded = form.get('needed-volunteer');
        const deadline = form.get('deadline');
        const description = form.get('description');
        const email = user?.email;
        const name = user?.displayName;
        const newInfo = { postTitle, location, thumbnail, category, volunteersNeeded, deadline, description, email, name };

        fetch("http://localhost:5000/addPost", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    // alert("data added");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Posted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/my-post');
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
                                    <input type="text" name="post-title" className="grow" placeholder="Post Title" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Location</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="location" className="grow" placeholder="Location" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Thumbnail</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="text" name="thumbnail" className="grow" placeholder="Thumbnail Url" />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            {/* Test */}
                            <div>
                                <h2 className="text-lg text-[#00929E] font-semibold">Category</h2>
                                <label className=" mt-2 input input-bordered flex items-center gap-2">
                                    <select className="w-full " name="category" id="">
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
                                <h2 className="text-lg font-semibold text-[#00929E]">No. of volunteers needed</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="number" name="needed-volunteer" className="grow" placeholder="No. of volunteers needed" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Deadline</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input type="date" name="deadline" className="grow" placeholder="Deadline" />
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
                        <button className="btn w-full text-white mt-2 bg-[#BA006F]">Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;