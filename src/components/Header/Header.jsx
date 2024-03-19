import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-3xl my-5">Nav bar</h1>
            <nav className="space-x-5 mb-5 ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>

            </nav>
        </div>
    );
};

export default Header;