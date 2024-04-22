const Banner = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/s20kYwfQ/Rectangle-2.png')] bg-no-repeat bg-cover py-20 px-10 md:py-72 md:px-48">
            <div className="text-white  md:float-end space-y-3">
                <h1 className="text-3xl md:text-5xl">Would you like a Cup of Delicious Coffee?</h1>
                <p>It,s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="bg-[#E3B577] btn text-2xl border-[#E3B577] rounded-none hover:text-white hover:bg-transparent   hover:border-white">Learn more</button>
            </div>
        </div>
    );
};

export default Banner;