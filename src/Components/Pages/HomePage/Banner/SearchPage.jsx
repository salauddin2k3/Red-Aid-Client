import  { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SearchPage = () => {
    const [bloodGroup, setBloodGroup] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazila, setSelectedUpazila] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const { data: districts = [], isLoading: isDistrictLoading } = useQuery({
        queryKey: ['districts'],
        queryFn: async () => {
            const res = await fetch('/public/districts.json');
            return res.json();
        }
    });

    const { data: upazilas = [], isLoading: isUpazilasLoading } = useQuery({
        queryKey: ['upazilas'],
        queryFn: async () => {
            const res = await fetch('/public/upazilas.json');
            return res.json();
        }
    });

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsSearching(true);

        const res = await axios.get('https://red-aid.vercel.app/users', {
            params: {
                bloodGroup,
                district: selectedDistrict,
                upazila: selectedUpazila,
            }
        });
        setSearchResults(res.data);
        setIsSearching(false);
    };

    const renderOptions = (data, placeholder) => (
        <>
            <option disabled value="">
                {placeholder}
            </option>
            {data.map((item) => (
                <option key={item.id} value={item.name}>
                    {item.name}
                </option>
            ))}
        </>
    );

    if (isDistrictLoading || isUpazilasLoading) {
        return <div>Loading.........</div>;
    }

    return (
        <div className="pt-52 mx-52">
            <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg">
                <form onSubmit={handleSearch}>
                    <div className="flex gap-10 items-center justify-center">
                        <div className="w-full flex items-center justify-center gap-4">
                            <div>
                                <select
                                    required
                                    className="mt-2 input input-bordered flex items-center gap-2"
                                    name="bloodGroup"
                                    value={bloodGroup}
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                >
                                    {renderOptions([
                                        { id: 1, name: "A+" },
                                        { id: 2, name: "A-" },
                                        { id: 3, name: "B+" },
                                        { id: 4, name: "B-" },
                                        { id: 5, name: "AB+" },
                                        { id: 6, name: "AB-" },
                                        { id: 7, name: "O+" },
                                        { id: 8, name: "O-" },
                                    ], "Select Blood Group")}
                                </select>
                            </div>
                            <div>
                                <select
                                    required
                                    className="mt-2 input input-bordered flex items-center gap-2"
                                    name="district"
                                    value={selectedDistrict}
                                    onChange={(e) => setSelectedDistrict(e.target.value)}
                                >
                                    {renderOptions(districts, "Select Your District")}
                                </select>
                            </div>
                            <div>
                                <select
                                    required
                                    className="mt-2 input input-bordered flex items-center gap-2"
                                    name="upazila"
                                    value={selectedUpazila}
                                    onChange={(e) => setSelectedUpazila(e.target.value)}
                                >
                                    {renderOptions(upazilas, "Select Your Upazila")}
                                </select>
                            </div>
                            <div>
                                <button className="btn w-full text-white mt-2 bg-[#BA006F]">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {isSearching ? (
                <div>Loading search results...</div>
            ) : (
                searchResults.length > 0 && (
                    <div className="py-10 px-20 border border-gray-200 rounded-xl shadow-lg mt-6">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>District</th>
                                        <th>Upazila</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResults.map((user, idx) => (
                                        <tr key={user._id} className="hover">
                                            <th>{idx + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.district}</td>
                                            <td>{user.upazilas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default SearchPage;
