
import React from 'react'
import {FiMapPin} from 'react-icons/fi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return(
    <>
    <div className='bg-[rgb(19,23,47)] py-10'>
        <div className='container mx-auto'>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 lg:px-14 md:px-8 px-6 gap-6 ' >
            <div className='space-y-5'>
                <h3 className='text-white text-lg font-semibold '>NEWSLETTER</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, cum.</p>
                <input type={'email '}  placeholder={ 'Email Goes Here'} className={"outline-none bg-transparent text-white"}  />
                <hr/>
            </div>


        
        <div className='space-y-2'>
            <h3 className='text-white text-lg font-semibold  '>HELPFULL LINKS</h3>
            <p className='text-white'> Term of use</p>
            <p className='text-white' >Privacy Policy </p>
            <p className='text-white'> Cookies</p>
            <p className='text-white'>Help</p>
            <p className='text-white'>FAQ'S</p>
            
        </div>
        <div className='space-y-4'>
            <h2 className='text-white text-lg font-semibold  '>OUR HEAD OFFICE</h2>
            <div className='flex text-red-500 text-xl gap-1'>
            < FiMapPin/>
                <p className='text-white text-sm '>USD Services , Hadapsar , Pune ,<br/>
Maharashatra, India- 412308</p>
            </div>
            <div className='flex text-red-500 text-xl gap-1'>
            < BsFillTelephoneFill/>
                <p className='text-white text-sm '>+91-7588223343</p>
            </div>
            <div className='flex text-red-500 text-xl gap-1'>
            < AiOutlineMail/>
                <p className='text-white text-sm '>helpdesk@usdservices.in</p>
            </div>
           
        </div>
        </div>  
        </div>
        <hr className='mt-5 md:mx-5'/>
            <div className='md:mx-20 mx-7 mt-2'>
                <p className='text-white text-sm '>© 2022 <span className='font-semibold'>USD SERVICES</span>,All Rights Reserved</p>
            </div>


    </div>
    
    </>
  ) 
    
  
}

export default Footer







