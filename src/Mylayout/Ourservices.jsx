import React, {useState} from "react";
import {Link} from "react-router-dom"


const Ourservices = () => {
    return( <>
        
        <div className="bg-[url('https://ik.imagekit.io/cc5n4mgg4x/bg-map_1GquUx3nN.jpg')]   py-16">
            <div >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold">Our Services</h2>
                    <p>USD Services offers a variety of IT consulting and Digital Marketing services which are flexible, robust & reliable as per our client’s requirements. At Vcana, we <br/> believe in building brands rather than a just a company or a name. Following is the list of services that we provide to our clients.</p>

                </div>
            </div>

            <div className="grid lg:grid-cols-3 px-10  py-14 gap-8 container mx-auto">
                {ServiceData.map ((item, index, ) => {
                    return(
                <div 
                key={index}
                className={`bg-white py-10 rounded-2xl shadow-lg px-10 text-center space-y-7 ${item .class}`}>
                    <img className="" src={item.img} alt="" />
                    <h2 className="text-2xl font-bold">{item. title}</h2>
                    <p className="py-5">{item.desc}</p>
                    <Link  to={item. route }
                     state={item} 
                     className="bg-red-600 text-white py-2 px-6 rounded-3xl ">Learn More</Link>

                </div>
                )
            })}
                </div>
            </div>
        </>
    )

}

// {ServiceData.map(()=>{})}

const ServiceData =[
{
    img:"https://www.q5infotech.com/wp-content/uploads/2020/09/Web-Development.jpeg",
    title:"Web Development",
    desc:"website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server",
    route:"/service-details",
    class:" "
},

{
    img:"https://norsecorp.com/wp-content/uploads/2020/02/fleet-scaled.jpg",
    title:"Fleet Management",
    desc:"Fleet Management Companies Usa. ZapMeta Offers The Overview from 6 Engines.",
    route:"/service-details",
    class:""
},

{
    img:"https://www.cloudways.com/blog/wp-content/uploads/WordPress-Website-Hacked.jpg",
    title:"Hack Site",
    desc:"In this tutorial you will learn how to hack websites, and we will introduce you to web application hacking techniques and the counter measures.",
    route:"/service-details",
    class:""
},

{
    img:"https://www.blogtyrant.com/wp-content/uploads/2012/03/choose-best-blog-hosting.png",
    title:"Host",
    desc:"GigaPromo is the website to compare Best Cloud Hosting Services. Search and save now! Find the lowest price for Best Cloud Hosting Services today!",
    route:"/service-details",
    class:""
},

{
    img:"https://aufaitux.com/wp-content/uploads/2020/05/UIUX-designing-1.jpg",
    title:"Ui/UX Design",
    desc:"A user experience (UX) designer works on a team to create products the provide meaningful and enjoyable experiences for users.",
    route:"/service-details",
    class:""
},

{
    img:"https://limejuice.co.za/wp-content/uploads/2021/08/Lime-Juice-Website-Services-06.jpg",
    title:"Green USD",
    desc:"Graphic design is the practice of composing and arranging the visual elements of a project. Designing the layout of a magazine, creating a poster for a theatre performance,",
    route:"/service-details",
    class:""
},

{
    img:"https://techtradigital.com/wp-content/uploads/2020/04/2020-google-Ideas-to-Increase-Business-Sale-Through-Digital-Marketing.jpg",
    title:"Digital Marketing",
    desc:"At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media",
    route:"/service-details",
    class:""
},

{
    img:"https://www.w3care.com/images/uploads/services/logo-banner.png",
    title:"Logo Design",
    desc:"Know your brand personality. You should have a clear idea of the brand personality you want to convey before you start designing a company logo",
    route:"/service-details",
    class:""
},




]

export default Ourservices