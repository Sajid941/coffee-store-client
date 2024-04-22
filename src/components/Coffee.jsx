import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'


const Coffee = ({ coffee,handleDeleteCoffee }) => {
    const {_id, name, chef, price, photoUrl } = coffee;

    return (

        <div className="bg-[#F5F4F1] rounded-lg p-8 flex items-center gap-32 h-auto">
            <div className="flex items-center gap-6">
                <img className="w-[200px]" src={photoUrl} alt="" />
                <div className="space-y-2">
                    <p className="text-[20px]">Name: <span className="text-[#1B1A1AB3]">{name}</span></p>
                    <p className="text-[20px]">Chef: <span className="text-[#1B1A1AB3]">{chef}</span></p>
                    <p className="text-[20px]">Price: <span className="text-[#1B1A1AB3]">{price} taka</span></p>
                </div>
            </div>
            <div className="space-y-5">
                <div className="w-10 h-10 bg-[#3C393B] rounded-lg flex justify-center hover:cursor-pointer items-center text-white"><FaEye size={20}></FaEye></div>
                <Link to={"/updateCoffee"} className="w-10 h-10 bg-[#D2B48C] rounded-lg flex justify-center items-center text-white"><MdEdit size={20}></MdEdit></Link>
                <div onClick={()=>handleDeleteCoffee(_id)} className="w-10 h-10 bg-[#EA4744] rounded-lg flex justify-center items-center text-white hover:cursor-pointer"><MdDelete size={20}></MdDelete></div>

            </div>

        </div>

    );
};

export default Coffee;
Coffee.propTypes={
    coffee:PropTypes.object,
    handleDeleteCoffee:PropTypes.func
}