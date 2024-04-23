import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user, logOut} = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/usersTable'}>Users</NavLink></li>
    </>

    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                title: "Log Out",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(error =>{
            Swal.fire({
                title: "Log out issue",
                text: error.message,
                icon: "error"
              });
        })
    }
    return (
        <div className="navbar bg-[url('https://i.postimg.cc/xdWP764w/15.jpg')] bg-contain text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Espresso Emporium</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogOut} className="bg-[#E3B577] btn text-2xl border-[#E3B577] hover:text-white hover:bg-transparent  hover:border-white">Log Out</Link> :
                        <Link to={"/login"} className="bg-[#E3B577] btn text-2xl border-[#E3B577] hover:text-white hover:bg-transparent  hover:border-white">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Header;