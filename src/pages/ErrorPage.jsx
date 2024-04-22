import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-5 max-w-full">
            <Link to={"/"} className="text-xl md:text-3xl text-[#374151] mb-5  btn hover:bg-[#E3B577] drop-shadow-lg">Back to Home</Link>
            <img className="mx-auto " src="https://i.postimg.cc/jdN2dFqH/404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;