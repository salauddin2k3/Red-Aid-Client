import { useContext, useEffect, useState } from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const BeAVolunteer = () => {

    const { user } = useContext(AuthContext);

    const navigateLocation = useLocation();
    const navigate = useNavigate();


    const { id } = useParams();

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/singlePost/${id}`)
            .then(res => res.json())
            .then(data => {
                setPostData(data);
            })
    }, [id]);

    const handleTest = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const postTitle = postData.postTitle;
        const location = postData.location;
        const thumbnail = postData.thumbnail;
        const category = postData.category;
        const volunteersNeeded = postData.volunteersNeeded;
        const deadline = postData.deadline;
        const description = postData.description;
        const orName = postData.name;
        const orEmail = postData.email;
        const suggestion = form.get('suggestion');
        const volEmail = user?.email;
        const volName = user?.displayName;
        const newInfo = { postTitle, location, thumbnail, category, volunteersNeeded, deadline, description, volName, volEmail, orName, orEmail, suggestion };
        console.log(newInfo);


        fetch("http://localhost:5000/addNewPost", {
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
                        title: "Request Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/my-post');
                }
            })
    }


    return (
        <div className="">
            <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg ">
                <div className="flex items-center justify-center gap-6">
                    <div className="text-3xl text-[#00929E]"><MdVolunteerActivism /></div>
                    <h2 className="text-center text-4xl text-[#BA006F] font-bold">Be a Volunteer</h2>
                </div>
                <div className="w-full p-4 mt-10 lg:p-16 bg-[#1313130d] rounded-xl flex justify-center">
                    <img className="w-fit rounded-xl" src={postData.thumbnail} alt="" />
                </div>
                <form onSubmit={handleTest} action="">
                    <div className="flex gap-10 items-center justify-center mt-12">
                        <div className="w-full">
                            <div>
                                <h2 className="text-lg font-semibold text-[#00929E]">Post Title</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.postTitle} type="text" name="post-title" className="grow" placeholder="Post Title" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Location</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.location} type="text" name="location" className="grow" placeholder="Location" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Thumbnail Url</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.thumbnail} type="text" name="thumbnail" className="grow" placeholder="Thumbnail Url" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Organizer Name</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.name} type="text" name="or-name" className="grow" placeholder="Thumbnail Url" />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            {/* Test */}
                            <div>
                                <h2 className="text-lg text-[#00929E] font-semibold">Category</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.category} type="text" name="category" className="grow" placeholder="Thumbnail Url" />
                                </label>
                            </div>
                            {/* Test */}
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">No. of volunteers needed</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.volunteersNeeded} type="number" name="needed-volunteer" className="grow" placeholder="No. of volunteers needed" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Deadline</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.deadline} type="date" name="deadline" className="grow" placeholder="Deadline" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-[#00929E]">Organizer Email</h2>
                                <label className="mt-2 input input-bordered flex items-center gap-2">
                                    <input disabled defaultValue={postData.email} type="text" name="or-email" className="grow" placeholder="or-email" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg text-[#00929E] font-semibold">Short Description</h2>
                        {/* <p className="mt-2 border border-gray-300 rounded-xl p-4">{postData.description}</p> */}
                        <label className="mt-2 input input-bordered flex items-center gap-2">
                            <input disabled defaultValue={postData.description} type="text" name="description" className="grow" placeholder="short description" />
                        </label>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-[#00929E] text-center">Volunteer Info</h2>
                        <div className="mt-3 border border-[#BA006F] rounded-xl p-6">
                            {/* Volunteer Info */}
                            <div className="flex gap-10 items-center justify-center mt-3">
                                <div className="w-full">
                                    <div>
                                        <h2 className="text-lg font-semibold text-[#00929E]">Volunteer Name</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input disabled defaultValue={user?.displayName} type="text" name="post-title" className="grow" placeholder="Post Title" />
                                        </label>
                                    </div>
                                    <div className="mt-3">
                                        <h2 className="text-lg font-semibold text-[#00929E]">Any Suggestion?</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input type="text" name="suggestion" className="grow" placeholder="Suggestion" />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    {/* Test */}
                                    <div>
                                        <h2 className="text-lg text-[#00929E] font-semibold">Volunteer Email</h2>
                                        <label className="mt-2 input input-bordered flex items-center gap-2">
                                            <input disabled defaultValue={user?.email} type="text" name="category" className="grow" placeholder="Thumbnail Url" />
                                        </label>
                                    </div>
                                    <div className="mt-3">
                                        <h2 className="text-lg text-[#00929E] font-semibold">Status</h2>
                                        <div className="mt-2 border border-gray-300 rounded-lg p-3">
                                            <h2 className="font-semibold italic text-[#BA006F]">Requested</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn w-full text-white mt-6 bg-[#BA006F]">Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeAVolunteer;