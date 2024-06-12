import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FaBlogger } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlog = () => {

    const navigateLocation = useLocation();
    const navigate = useNavigate();

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handlePostBlog = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const blogTitle = form.get('blog-title');
        const file = form.get('thumbnail-image');
        const status = "draft";

        try {
            // Upload the image to ImageBB
            const imageData = new FormData();
            imageData.append('image', file);

            const uploadRes = await axios.post(image_hosting_api, imageData);
            const imageUrl = uploadRes.data.data.display_url;

            // Create the blog post object
            const newInfo = {
                status,
                blogTitle,
                thumbnailImage: imageUrl,
                blogContent: content // directly include HTML content
            };

            // Send the blog post to the server
            const res = await fetch("http://localhost:5000/blogPost", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newInfo)
            });

            const data = await res.json();
            if (data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Blog Posted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(navigateLocation?.state ? navigateLocation.state : '/dashboard/content-management');
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an issue posting the blog.',
            });
        }
    }

    return (
        <div>
            <div className="mx-16 flex justify-center">
                <div className="py-10 px-20 w-3/4 border border-gray-200 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center gap-6">
                        <div className="text-3xl text-[#00929E]"><FaBlogger /></div>
                        <h2 className="text-center text-4xl text-[#BA006F] font-bold">Create New Blog</h2>
                    </div>
                    <form onSubmit={handlePostBlog}>
                        <div className="mt-12">
                            <div className="w-full">
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Blog Title</h2>
                                    <label className="mt-2 input input-bordered flex items-center gap-2">
                                        <input required type="text" name="blog-title" className="grow" placeholder="blog title......." />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Thumbnail Image</h2>
                                    <label className="mt-2 relative input input-bordered flex items-center gap-2">
                                        <input required name="thumbnail-image" type="file" className="file-input left-0 absolute w-full" />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Blog Content</h2>
                                    <div className="mt-2">
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            onChange={(newContent) => setContent(newContent)}
                                        ></JoditEditor>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="btn w-full text-white mt-2 bg-[#BA006F]">Create Blog</button>
                        </div>
                    </form>
                    <div dangerouslySetInnerHTML={{ __html: content }} className="mt-10"></div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
