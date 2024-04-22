import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Coffee from "../components/Coffee";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    const handleDeleteCoffee = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = coffees.filter(coffee => coffee._id !== _id)
                        setCoffees(remaining)
                    })
            }
        });

    }

    return (
        <div>
            <Banner></Banner>
            <div className="text-center space-y-3 mt-10 ">
                <p className="text-[#1B1A1A]">--- Sip & Savor ---</p>
                <h2 className="text-5xl text-[#331A15]">Our Popular Product</h2>
                <Link to={"/addCoffee"} className="bg-[#E3B577] btn text-2xl text-white hover:text-black border-2 border-[#331a15] shadow-xl rounded-none hover:bg-transparent ">Add Coffee</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-10 px-28">
                {
                    coffees.map(coffee => <Coffee key={coffee._id} handleDeleteCoffee={handleDeleteCoffee} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;