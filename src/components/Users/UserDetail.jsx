import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData()
    const { name, email, phone } = user;
    return (
        <div>
            <div >
                <h2 className="card-title justify-center text-3xl mb-3">{name}</h2>
                <p className="text-lg">Email : {email}</p>
                <p className="text-lg">Number : {phone}</p>
            </div>
        </div>
    );
};

export default UserDetail;