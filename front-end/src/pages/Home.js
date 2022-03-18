import { useSelector } from "react-redux";
import Subnav from "./Subnav";
import TopNav from "../components/TopNav";

const Home = () => {
    const { user } = useSelector((state) => ({ ...state }));
    return (
        <div className=" ">
            <TopNav />
            <Subnav />
        </div>

    )
};

export default Home;
