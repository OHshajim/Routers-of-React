import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
           <h1 className='text-4xl'>Users : {users.length}</h1> 
           <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
            {users.map(user=><User key={user.id} user={user}></User>)}
           </div>
        </div>
    );
};

export default Users;