import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-3xl my-5">Nav bar</h1>
            <nav className="space-x-5 mb-5 ">
                <Link to="/"       className="border rounded-xl px-3 py-2 border-sky-600">Home</Link>
                <Link to="/about"  className="border rounded-xl px-3 py-2 border-sky-600">About</Link>
                <Link to="/contact"className="border rounded-xl px-3 py-2 border-sky-600">Contact us</Link>
                <Link to="/users"  className="border rounded-xl px-3 py-2 border-sky-600">Users</Link>
                <Link to="/posts"  className="border rounded-xl px-3 py-2 border-sky-600">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;