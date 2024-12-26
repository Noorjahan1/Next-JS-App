'use client'
import React from 'react';
import Image from 'next/image';
import { Carousel } from "../../node_modules/@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const CustomerSays = () => {
    return (
        <div className='my-10'>
            <div className='flex justify-between bg-gray-300 p-10 m-auto w-[1000px] '>
            <h1 className='text-3xl font-bold  ml-[150px] text-gray-600'>What our customer says</h1>
            <Link href ="../customerDetails" className=' text-white rounded-lg'>View All <FontAwesomeIcon icon={faGreaterThan} size='300px' className='text-white'></FontAwesomeIcon></Link>
            </div>
            

           <div className='flex justify-between p-10 m-auto bg-gray-300 w-[1000px]'>
           <Carousel className="rounded-xl">
           <div className='flex justify-between'> 
                     <div className='w-[500px] pl-[200px]'>
                     <Image 
                       src='/customer.jpg' 
                       alt="Customer" 
                       width={190}
                       height={190}
                       style={{ borderRadius: "50%", objectFit: "fit" }} 
                     />
                     </div>
                    <div className='flex items-center mr-[70px]'>
                    <div className='w-[400px]  '>
                     <h1 className='text-[20px] text-[30px] text-white block'>Customer Name</h1>
                     <p className='text-white block'>This platform exceeded my expectations. The service was exceptional, and I highly recommend it to everyone.</p>
                    
                     </div>
                    </div>
                    
                     
               </div>
               <div className='flex justify-between'> 
                     <div className='w-[500px] pl-[200px]'>
                     <Image 
                       src='/customer.jpg' 
                       alt="Customer" 
                       width={190}
                       height={190}
                       style={{ borderRadius: "50%", objectFit: "fit" }} 
                     />
                     </div>
                    <div className='flex items-center mr-[70px]'>
                    <div className='w-[400px]  '>
                     <h1 className='text-[20px] text-[30px] text-white block'>Customer Name</h1>
                     <p className='text-white block'>This platform exceeded my expectations. The service was exceptional, and I highly recommend it to everyone.</p>
                    
                     </div>
                    </div>
                    
                     
               </div>
               <div className='flex justify-between'> 
                     <div className='w-[500px] pl-[200px]'>
                     <Image 
                       src='/customer.jpg' 
                       alt="Customer" 
                       width={190}
                       height={190}
                       style={{ borderRadius: "50%", objectFit: "fit" }} 
                     />
                     </div>
                    <div className='flex items-center mr-[70px]'>
                    <div className='w-[400px]  '>
                     <h1 className='text-[20px] text-[30px] text-white block'>Customer Name</h1>
                     <p className='text-white block'>This platform exceeded my expectations. The service was exceptional, and I highly recommend it to everyone.</p>
                    
                     </div>
                    </div>
                    
                     
               </div>
              
                     
               
           </Carousel>
           
           </div>
          
        </div>
    );
};

export default CustomerSays;