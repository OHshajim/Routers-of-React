import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    console.log(user);
    const {name,email,phone,id} = user
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Email : {email}</p>
                    <p>Number : {phone}</p>
                    <Link to={`/user/${id}`}>
                        <button className='btn'>See more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object,

}
export default User;