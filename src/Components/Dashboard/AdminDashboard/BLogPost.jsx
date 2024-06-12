import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const BLogPost = ({ post }) => {

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    const [showFullContent, setShowFullContent] = useState(false);

    const handleReadMoreToggle = () => {
        setShowFullContent(!showFullContent);
    };

    // Define the length of the preview content
    const previewLength = 1500;

    // Slice the content to create a preview
    const previewContent = post.blogContent.length > previewLength
        ? post.blogContent.substring(0, previewLength) + '...'
        : post.blogContent;


    const handleMakePublished = user => {
        // console.log(user)
        axios.patch(`http://localhost:5000/status/published/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Confirm!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Confirmed!",
                                icon: "success"
                            });
                        }
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard');
                }
                else {
                    Swal.fire("Already Done!");
                }
                // refetch();
                // console.log(res.data);
            })
    };

    const handleMakeDraft = user => {
        // console.log(user)
        axios.patch(`http://localhost:5000/status/draft/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Confirm!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Confirmed!",
                                icon: "success"
                            });
                        }
                    });
                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard');
                }
                else {
                    Swal.fire("Already Done!");
                }
                // refetch();
                // console.log(res.data);
            })
    };


    const handleBlogDelete = (id) => {
        fetch(`http://localhost:5000/blog/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // setControl(!control);
                    // alert("Deleted")
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Blog has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                    navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard');
                }
            });
    };

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                    src={post.thumbnailImage}
                    alt="Blog thumbnail"
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-1">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">
                            {post.blogTitle}
                        </h2>
                        {/* <h2 className="text-3xl font-semibold tracking-wide">
                            {post.status}
                        </h2> */}
                        <div>
                            <p
                                dangerouslySetInnerHTML={{ __html: showFullContent ? post.blogContent : previewContent }}
                                className="dark:text-gray-800"
                            ></p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className=" text-white btn btn-sm w-fit bg-[#BA006F] hover:bg-[#27796f]"
                        onClick={handleReadMoreToggle}
                    >
                        {showFullContent ? 'Show less' : 'Read more'}
                    </button>
                </div>
                <div>
                    {
                        post.status === "draft" &&
                        <div className="mx-3 pb-3">
                            <button onClick={() => handleMakePublished(post)} className="btn w-full bg-[#00929E] text-white">Publish</button>
                        </div>
                    }
                    {
                        post.status === "published" &&
                        <div className="mx-3 pb-3">
                            <button onClick={() => handleMakeDraft(post)} className="btn w-full bg-[#00929E] text-white">Unpublish</button>
                        </div>
                    }
                </div>
                <div className="mx-3 pb-3">
                    <button onClick={() => handleBlogDelete(post._id)}  className="btn w-full bg-[#BA006F] text-white">Delete</button>
                </div>
            </div>

        </div>
    );
};

BLogPost.propTypes = {
    post: PropTypes.shape({
        blogTitle: PropTypes.string.isRequired,
        thumbnailImage: PropTypes.string.isRequired,
        blogContent: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default BLogPost;
