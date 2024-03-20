import { Link,  useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h3 className='text-lg'>Opssss!!! </h3>
            <p>{error.statusText || error.error.message}</p>
            {
                error.status===404 && <div>
                    <h3>This page is not found</h3>
                    <Link to={'/'}><button className="btn bg-[tomato] my-4 text-black"> Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage; <h1>Opssss</h1>