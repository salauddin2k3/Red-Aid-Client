import { useState } from "react";


const BlogCard = ({ post }) => {

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

    return (
        <div>
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
                </div>

            </div>
        </div>
    );
};

export default BlogCard;