
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[url('https://i.postimg.cc/Gt54NzTs/Rectangle-18.png')] md:px-32 mt-10 text-[#331A15]">
            <aside>
                <h1 className="text-4xl">Espresso Emporium</h1>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
                <h3 className="text-4xl">Get in touch</h3>
                <p>01307599***</p>
                <p>info@gmail.com</p>
                <p>72, Wall street, King Road, Dhaka</p>
            </aside>
            <nav>
    
                <section >
                    <div className="">
                        <h2 className="mb-4 text-4xl">Contact Us</h2>
                        <form action="#" className="space-y-2">
                            <div>
                                <label htmlFor="email" className="mb-2 text-sm font-medium ">Your email</label>
                                <input type="email" id="email" className="shadow-sm  border border-gray-300 text-sm rounded-lg w-full p-2.5 " placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="mb-2 text-sm font-medium">Subject</label>
                                <input type="text" id="subject" className="p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="mb-2 text-sm font-medium">Your message</label>
                                <textarea id="message" rows="6" className=" p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-lg btn bg-[#D2B48C]">Send message</button>
                        </form>
                    </div>
                </section>

            </nav>
        </footer>
    );
};

export default Footer;