
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyListInfo = (info) => {


    const navigateLocation = useLocation();
    const navigate = useNavigate();




    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
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
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                    navigate(navigateLocation?.state ? navigateLocation.state : '/');
                }
            });
    }


    return (
        <div className="" data-aos="fade-up" data-aos-duration="3000" >
            <div className='mx-2'>
                <div className='rounded-xl mt-7 border-[#dddcdc] border p-6 h-full'>
                    <div>
                        <div className='bg-[#F3F3F3] py-7 px-7 rounded-xl'>
                            <div className='flex justify-center items-center'>
                                <img className='rounded-xl' src={info.info.thumbnail} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row lg:items-center gap-4'>
                                {/* <h2 className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit'>Young Adult</h2> */}
                                {/* {
                                        estate.tags.map((tags, idx) => <p className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit' key={idx}>{tags}</p>)
                                    } */}
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-2xl font-bold '>{info.info.postTitle}</h2>
                                <p className='mt-6 text-base font-medium  font-work'>{info.info.description}</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-between">

                                <div className="flex items-center mt-4 justify-center gap-20">
                                    <h2 className="font-bold  font-work">Category: <span className="font-normal">{info.info.category}</span></h2>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <FaLocationDot className="text-xl " />
                                        </div>
                                        <div>
                                            <h3 className='font-bold  font-work'>{info.info.location}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-between">
                                <div className="w-full border-2 flex flex-col items-center border-gray-400 rounded-lg p-9">
                                    <p className="text-lg font-bold  font-work">Deadline : {info.info.deadline} </p>
                                    <p className="mt-4 text-lg font-bold  font-work">Needed Volunteers:  ({info.info.volunteersNeeded}) </p>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-around">
                                <Link to={`/update-post/${info.info._id}`}><button className="btn btn-accent px-16">Update</button></Link>
                                <button onClick={() => handleDelete(info.info._id)} className="btn btn-error px-16">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyListInfo;