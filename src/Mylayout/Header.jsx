import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <>
    <div className='py-3 shadow-md '>
    <div className='container mx-auto  '> 
    <div className='flex justify-between items-center lg:px-14 md:px-8 px-6 '>
        <Link to="/" className=''>
            <img  className='w-28 cursor-pointer' src='https://usd-service.vercel.app/static/media/Logo.a7213fc7e29b020ad256.png'/>
            
    
       </Link>
       <div className='text-2xl md:hidden'>
       < AiOutlineMenu/>
       </div>
       
        <div className='md:flex gap-5 hidden'>
            <Link to="/" className='uppercase font-semibold text-sm hover:text-red-bg-blue-900  cursor-pointer'>Home</Link>
            <Link to="/About" className='uppercase font-semibold text-sm hover:text-red-600 cursor-pointer'>ABOUT</Link>
            <Link to="/Ourservices" className='uppercase font-semibold text-sm hover:text-red-600 cursor-pointer'>SERVICE</Link>
            <Link to="/Error" className='uppercase font-semibold text-sm hover:text-red-600 cursor-pointer'>OUR CLIENT</Link>
            <Link to="/Error" className='uppercase font-semibold text-sm hover:text-red-600 cursor-pointer'>BLOG</Link>
            <Link to="/Error" className='uppercase font-semibold text-sm hover:text-red-600 cursor-pointer'>CAREER</Link>
        </div>
        <div className="md:flex hidden">
            <Link to="Contact" className='bg-red-600 py-2 tracking-widest px-4 rounded-md text-white text-xs font-semibold hover:bg-blue-900 cursor-pointer ' >CONTACT US</Link>
        </div>
       
       {/* <div>
       < BiSearch/>

       </div> */}
       </div>
    </div>
    </div>
    </>
  )
}

export default Header
