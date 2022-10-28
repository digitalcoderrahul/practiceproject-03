import React from "react";

const Hero = ()=>{
    return (
        <>
        <div className="">
            <div className="lg:flex justify-between flex-wrap">
                <div className="md-py-20 md:px-12 space-y-5 px-5 py-4 lg:py-10 lg:px-12">
                    <button className="bg-gray-200 rounded-2xl px-3 text-xs font-semibold py-1 ">BRAND NEW</button>
                    <h2 className="text-3xl font-bold">Everything you <br/>
can imagine is real</h2>
<p>Sed ut perspiciatis unde omnis iste natus error sit <br/> voluptatem accusantium doloremque laudantium, <br/> totam rem aperiam, eaque ipsa quae. explicabo.</p>
               <div className="flex items-center gap-4">
                    <button className="bg-red-600 text-white py-2 px-6 text-lg font-semibold rounded-md ">Get Started</button> 
                    <p className="font-bold">Learn more</p>
                </div>


                </div>
                
                <div className="w-1/2      md:mx-12 mx-5 my-2   ">
                    <img className="" src="https://plus.unsplash.com/premium_photo-1665203421659-09089ede4ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
            </div>
        </div>
        <div className="bg-purple-900 py-11 gap-4 grid lg:grid-cols-4 md:grid-cols-2">
            
            <div className=" px-8 ">
                <div className="outline-dotted outline-gray-500 outline-2 py-7">
                <div className="flex items-center  justify-center ">
                    <img src="https://ik.imagekit.io/nboj7z3sl/WOrk_KKXdZU85E.png"  />
                    <p className="text-4xl font-mono text-white">13+</p>

                </div>
                <div className=" text-center">
                    <p className="text-2xl font-mono text-white" >Years in Business</p>
                </div>
                </div>
                
            </div>
            <div className=" px-8">
                <div className="outline-dotted outline-gray-500 outline-2 py-7">
                <div className="flex items-center justify-center ">
                    <img src="https://ik.imagekit.io/nboj7z3sl/happy_kyWqTo0Gz.png"  />
                    <p className="text-4xl font-mono text-white">300+</p>

                </div>
                <div className=" text-center">
                    <p className="text-2xl font-mono text-white" >Happy Clients</p>
                </div>
                </div>
                
            </div>
            <div className="px-8  ">
                <div className="outline-dotted outline-gray-500 outline-2 py-7">
                <div className="flex items-center justify-center ">
                    <img src="https://ik.imagekit.io/nboj7z3sl/team_d1CnUPCwW.png"  />
                    <p className="text-4xl font-mono text-white">40+</p>

                </div>
                <div className="text-center">
                    <p className="text-2xl font-mono text-white" >Technical Experts</p>
                </div>
                </div>
                
            </div>
            <div className="px-8">
                <div className="outline-dotted outline-gray-500 outline-2 py-7">
                <div className="flex items-center justify-center ">
                    <img src="https://ik.imagekit.io/nboj7z3sl/satisfication_MqDtbjle4b.png"  />
                    <p className="text-4xl font-mono text-white">130+</p>

                </div>
                <div className="text-center">
                    <p className="text-2xl font-mono text-white" >Apps Delivered</p>
                </div>
                </div>
                
            </div>
        </div>
        
        
        
        </>


    )


}

export default Hero