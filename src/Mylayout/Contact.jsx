    import React from "react";


    const Contact =()=> {
        return(
            <>
            <div className="">
                <div className="text-center py-16">
                <h2 className=" text-3xl font-semibold">Contact Us</h2>
                </div>
            </div>
            <div className=" container mx-auto flex justify-between flex-wrap lg:flex-nowrap py-14 items-center px-10">
            <div className="space-y-5  ">
                <h3 className="text-4xl font-semibold">GET IN TOUCH WITH US</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><span className="text-2xl font-semibold ">Our Head Office</span><br/>USD Services , Hadapsar , Pune ,<br/> Maharashatra, India- 412308</p>
                <p><span className="text-2xl font-semibold ">Call for Help</span><br/> +91-7588223343</p>
                <p><span className="text-2xl font-semibold ">Email for Information</span><br/> usdservices@gmail.com</p>
            </div>
            <div className=" shadow-xl space-y-8 text-center px-8 py-14">
                <div>
                <input type="text" placeholder={"Your Name"}  className={"w-full py-3 outline-none border rounded-md px-3"} />
                </div>
                <input type="text" placeholder={"Your Number"} className={"w-full py-3 outline-none border rounded-md px-3"} />
                <div>  
                <input type="Email" placeholder={"Your Email"} className={"w-full py-3 outline-none border rounded-md px-3"}/>
                </div> 
                <select className="w-full py-3 outline-none border rounded-md px-3">  
                <option value={""}>--Select Service--- </option>
                <option value={""}>Web Development </option>
                <option value={""}>App Development </option>
                <option value={""}>SEO</option>
                <option value={""}>SMM</option>
                </select>
                <div>
                <button className="bg-red-600 py-3 px-44 text-white font-semibold">Send Message</button> 
                </div>
            </div>
            <div>
            
            </div>
            </div>
            
            </>

        )
    }
    export default Contact