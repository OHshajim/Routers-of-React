import { useLoaderData, useNavigate } from "react-router-dom";

const Detail = () => {
    const post = useLoaderData()
    const {title,id ,body}=post
    const navigate = useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div className=" ">
            <p className='px-3 text-center text-xl'>Id : {id}</p>
            <h1 className='text-lg text-blue-600'>{title}</h1>
            <p className='text-sm text-gray-500'>{body}</p>
            <button onClick={handleBack} className="btn text-black bg-sky-700 my-4">Go back</button>
        </div>
    );
};

export default Detail;