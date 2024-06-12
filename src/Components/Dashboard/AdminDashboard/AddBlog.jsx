
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FaBlogger } from "react-icons/fa6";


const AddBlog = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');


    return (
        <div>
            <div className="mx-16 flex justify-center">
                <div className="py-10 px-20 w-3/4 border border-gray-200 rounded-xl shadow-lg ">
                    <div className="flex items-center justify-center gap-6">
                        <div className="text-3xl text-[#00929E]"><FaBlogger /></div>
                        <h2 className="text-center text-4xl text-[#BA006F] font-bold">Create New Blog</h2>
                    </div>
                    <form action="">
                        <div className="mt-12">
                            <div className="w-full">
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">Blog Title</h2>
                                    <label className="mt-2 input input-bordered flex items-center gap-2">
                                        <input required type="text" name="recipient-name" className="grow" placeholder="blog title......." />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold text-[#00929E]">THumbnail Image</h2>
                                    <label className="mt-2 relative input input-bordered flex items-center gap-2">
                                        <input name="url" type="file" className="file-input left-0 absolute w-full" />
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
                    <div dangerouslySetInnerHTML={{__html: content}} className="mt-10">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;