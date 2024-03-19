import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
const Home = () => {
    return (
        <div className="h-screen space-y-14">
            <Header></Header>
            <h1>This is home </h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;