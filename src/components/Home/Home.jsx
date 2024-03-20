import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
const Home = () => {
    const navigation = useNavigation()
    return (
        <div className="h-screen space-y-14">
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <p>data loading...</p> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;