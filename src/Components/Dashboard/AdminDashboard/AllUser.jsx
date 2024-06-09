import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllUser = () => {

    const {data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users');
            return res.data;
        }
    });

    return (
        <div>
            <h2>Total User: {users.length}</h2>
        </div>
    );
};

export default AllUser;