import PropTypes from 'prop-types'; // ES6
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    console.log(post);
    const {title ,body ,id} = post ;
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='m-3 p-5 border rounded-xl'>
            <p className='text-start px-3'>Id : {id}</p>
            <h1 className='text-lg text-blue-600'>{title}</h1>
            <p className='text-sm text-gray-500 mb-5'>{body}</p>
            <Link to={`/posts/${id}`}>More Details</Link> <br />
            <button onClick={handleClick} className='btn my-2'>See more</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object,
}
export default Post;