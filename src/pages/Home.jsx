import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Coffee from "../components/Coffee";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center space-y-3 mt-10 ">
                <p className="text-[#1B1A1A]">--- Sip & Savor ---</p>
                <h2 className="text-5xl text-[#331A15]">Our Popular Product</h2>
                <Link to={"/addCoffee"} className="bg-[#E3B577] btn text-2xl text-white hover:text-black border-2 border-[#331a15] shadow-xl rounded-none hover:bg-transparent ">Add Coffee</Link>
            </div>
            <div>
                <Coffee></Coffee>
            </div>
        </div>
    );
};

export default Home;