import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";



const Coffee = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 mt-10 px-28">
            <div className="bg-[#F5F4F1] rounded-lg p-8 flex items-center gap-32">
                <div className="flex items-center gap-6">
                    <img className="w-[200px]" src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-iced-coffee-png-png-image_13381335.png" alt="" />
                    <div className="space-y-2">
                        <p className="text-[20px]">Name: <span className="text-[#1B1A1AB3]">Americano</span></p>
                        <p className="text-[20px]">Chef: <span className="text-[#1B1A1AB3]">Sajid islam</span></p>
                        <p className="text-[20px]">Price: <span className="text-[#1B1A1AB3]">100 taka</span></p>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="w-10 h-10 bg-[#3C393B] rounded-lg flex justify-center items-center text-white"><FaEye size={20}></FaEye></div>
                    <Link to={"/updateCoffee"} className="w-10 h-10 bg-[#D2B48C] rounded-lg flex justify-center items-center text-white"><MdEdit size={20}></MdEdit></Link>
                    <div className="w-10 h-10 bg-[#EA4744] rounded-lg flex justify-center items-center text-white"><MdDelete size={20}></MdDelete></div>

                </div>

            </div>
        </div>
    );
};

export default Coffee;