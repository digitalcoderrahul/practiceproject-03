import React from "react";
import { useLocation, } from "react-router-dom";


const ServiceDetails = () => {
    const location = useLocation ();
    const data = location.state;
    console.log(data)
    return(
        <>
        <section className="container mx-auto py-10 text-center">
            <h2 className="text-7xl py-4">{data.title}</h2>
            <p className="py-5">{data.desc}</p>
            <img className="felx justify-center h-screen" src={data.img}/>
        </section>
        </>
    );    
};

export default ServiceDetails;