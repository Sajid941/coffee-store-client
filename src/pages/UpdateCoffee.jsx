import { Link } from "react-router-dom";

const UpdateCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, chef, supplier, taste, category, details,price, photoUrl);
    }
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <Link to={"/"} className="text-xl md:text-3xl text-[#374151] btn hover:bg-[#E3B577] drop-shadow-2xl">Back to Home</Link>
            <div className="mt-5 bg-[#F4F3F0] p-16 rounded-xl">
                <div className="text-center space-y-3">
                    <h1 className="text-2xl md:text-5xl">Update Existing Coffee Details</h1>
                    <p className="md:px-72">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee} className="card-body">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your coffee name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter your coffee Chef" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter your coffee Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter your coffee Taste" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter your coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter your coffee Details" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter your coffee price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Enter your coffee Photo url" className="input input-bordered" required />
                        </div>
                    </div>

                    <button className="bg-[#E3B577] btn text-2xl  border-2 border-[#331a15] shadow-xl  ">Update Coffee Details</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;