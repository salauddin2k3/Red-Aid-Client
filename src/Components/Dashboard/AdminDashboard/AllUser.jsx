import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users');
            return res.data;
        }
    });

    console.log(users);

    const handleMakeAdmin = user => {
        console.log(user)
        axios.patch(`http://localhost:5000/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    const handleMakeVolunteer = user => {
        console.log(user)
        axios.patch(`http://localhost:5000/users/volunteer/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Volunteer Now!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    const handleMakeDonor = user => {
        console.log(user)
        axios.patch(`http://localhost:5000/users/donor/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Donor Now!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    const handleRoleChange = (e, user) => {
        const role = e.target.value;
        if (role === "admin") {
            handleMakeAdmin(user);
        } else if (role === "volunteer") {
            handleMakeVolunteer(user);
            console.log("Make Volunteer functionality not implemented yet");
        } else if (role === "donor") {
            handleMakeDonor(user);
            // console.log("Make Donor functionality not implemented yet");
        }
    };

    // Status Changing Section
    const handleMakeBlock = user => {
        console.log(user)
        axios.patch(`http://localhost:5000/users/block/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Blocked!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    const handleMakeActive = user => {
        console.log(user)
        axios.patch(`http://localhost:5000/users/active/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Active!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-base">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Body */}
                        {
                            users.map((user, idx) =>
                                <tr key={user._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="badge badge-ghost badge-sm p-3">{user.email}</div>
                                    </td>
                                    <td>{user?.status}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        <select
                                            defaultValue="Change Role"
                                            className="border border-gray-300 p-1 rounded-md"
                                            onChange={(e) => handleRoleChange(e, user)}
                                            name=""
                                            id="">
                                            <option disabled value="Change Role">Change Role</option>
                                            <option value="admin">Make Admin</option>
                                            <option value="volunteer">Make Volunteer</option>
                                            <option value="donor">Make Donor</option>
                                        </select>
                                    </td>
                                    <th>
                                        {
                                            user?.status === "Active" && <span onClick={() => handleMakeBlock(user)} className="btn text-sm btn-sm lg:text-base text-white font-medium bg-[#BA006F] ">Block</span>
                                        }
                                        {
                                            user?.status === "Block" && <span onClick={() => handleMakeActive(user)} className="btn text-sm btn-sm lg:text-base text-white font-medium bg-[#27796f] ">Active</span>
                                        }
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUser;