import { Link } from "react-router-dom";


const ContentManagement = () => {
    return (
        <div className="flex justify-center">
            <div>
                <Link to="/dashboard/content-management/add-blog"><button className="btn bg-[#00929E] text-white mt-6 px-8 w-fit">Add Blog</button></Link>
            </div>
        </div>
    );
};

export default ContentManagement;