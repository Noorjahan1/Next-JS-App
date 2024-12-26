import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPen,faPhone,faMap } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { icon } from '@fortawesome/fontawesome-svg-core';

// Specify all properties: name, family, style

const ContactUs = () => {
    return (
        <div className='m-[100px] rounded-lg'style={{background: 'url(/contactUs.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className='flex justify-between'>
            <div className='p-5 '>
             <h1 className='text-white py-10 text-[30px]' > CONTACT US</h1>
             <p className='text-white p-2 text-[18px]'>CONTACT US today to improve your communication and language skill.</p>
             <h1 className='text-white pb-5 pt-10 text-[25px]'> Give us a call</h1>
             <p className='text-white p-2 text-[18px] inline'><FontAwesomeIcon icon={faPhone}  className='text-white size-5 m-3 inline'/>0284040715</p>
             <h1 className='text-white py-5 text-[25px]'>Send us an Email</h1>
             <p className='text-white p-2 text-[18px] inline'><FontAwesomeIcon icon={faEnvelope}  className='text-white size-5 m-3 inline'/>0284040715</p>
             <h1 className='text-white py-5 text-[25px]'>Drop By and Talk</h1>
             <p className='text-white p-2 text-[18px] inline'><FontAwesomeIcon icon={faMap}  className='text-white size-5 m-3 inline'/>1 pottery Landlane and COve</p>
             </div>
             <div className='p-5 mr-5 mt-8 bg-slate-500 rounded-lg'>
                <form>
                    <label className='text-white text-[20px]' htmlFor="email">Email:</label>
                    <div className='w-[500px] flex justify-between px-5 my-5 bg-white rounded-lg'>
                    <input className=' mr-10 pb-2 mt-2 bg-transparent w-[90%] focus:outline-none' id="email" type='email' placeholder='Email' >
                    
                    </input>
                    <FontAwesomeIcon icon={faEnvelope}  className='text-gray-500 size-5 m-3 '/>   
                    </div>
                    <label className='text-white text-[20px]' htmlFor="name">Name:</label>
                    <div className='w-[500px] flex justify-between px-5 my-10 bg-white rounded-lg'>
                    
                    <input id="name" className=' mr-10 pb-2 mt-2 bg-transparent w-[90%] focus:outline-none' type='text' placeholder='Name'></input>
                    <FontAwesomeIcon icon={faUser}  className='text-gray-500 size-5 m-3 '/>   
                    </div>
                    <label className='text-white text-[20px]' htmlFor="message" >Message:</label>
                    <div className='w-[500px] flex justify-between px-5 my-10 bg-white rounded-lg'>
                    
                    <textarea id="message" className=' mr-10 pb-2 mt-2 bg-transparent w-[90%] focus:outline-none snap-none resize-none' placeholder='Write Message' ></textarea>
                    <FontAwesomeIcon icon={faPen}  className='text-gray-500 size-5 m-3 '/>   
                    </div>

                    
                </form>
                <div className='p-5  block' >
                <button className='bg-slate-600 mb-5 text-[20px] text-white p-5 rounded-lg '>Submit Now</button>
             </div>
             </div>
             
             </div>
             
        </div>
    );
};

export default ContactUs;