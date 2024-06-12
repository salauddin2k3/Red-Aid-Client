import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        district: '',
        upazilas: '',
        bloodGroup: '',
        url: ''
    });

    useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            const userData = res.data[0];
            setFormData(userData); // Set form data with fetched user data
            return res.data;
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleEdit = () => {
        setIsEditable(true);
    };

    const handleSave = async () => {
        // Add logic to save updated data to the database here
        try {
            const response = await axios.put(`http://localhost:5000/users/update/${user?.email}`, formData);
            // console.log("Data saved successfully", response.data);
            if (response.data?.matchedCount > 0) {
                // console.log(data);
                // alert("data Update")
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Profile Update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            setIsEditable(false);
        } catch (error) {
            console.error("Failed to save data", error);
        }
    };

    return (
        <div className="flex items-center justify-center lg:mt-36">
            <div className="flex relative flex-col justify-center w-1/3 px-8 py-16 shadow-2xl border border-[#27796f] rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <div className="absolute top-5 right-5">
                    {isEditable ? (
                        <button
                            className="btn bg-green-500 hover:bg-green-700"
                            onClick={handleSave}
                        >
                            <span className="text-white font-bold text-base">Save</span>
                        </button>
                    ) : (
                        <button
                            className="btn bg-[#BA006F] hover:bg-[#27796f]"
                            onClick={handleEdit}
                        >
                            <span className="text-white font-bold text-base">Edit Profile</span>
                        </button>
                    )}
                </div>
                <img
                    src={formData.url}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        {isEditable ? (
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        ) : (
                            <h2 className="text-xl font-semibold sm:text-2xl">{formData.name}</h2>
                        )}
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600">{formData.email}</p>
                    </div>
                    <div className="space-x-4 pt-4 flex items-center justify-center gap-3">
                        <h2>
                            <span className="font-bold">District:</span>{" "}
                            {isEditable ? (
                                <input
                                    type="text"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            ) : (
                                formData.district
                            )}
                        </h2>
                        <h2>
                            <span className="font-bold">Upazila:</span>{" "}
                            {isEditable ? (
                                <input
                                    type="text"
                                    name="upazilas"
                                    value={formData.upazilas}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            ) : (
                                formData.upazilas
                            )}
                        </h2>
                    </div>
                    <div className="space-x-4 pt-4 flex items-center justify-center gap-3">
                        <h2>
                            <span className="font-bold">Blood Group:</span>{" "}
                            {isEditable ? (
                                <input
                                    type="text"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            ) : (
                                formData.bloodGroup
                            )}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
