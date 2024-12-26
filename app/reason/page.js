import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
const reasons = [
    "High quality service",
    "Affordable prices",
    "Experienced professionals",
    "Customer satisfaction guaranteed",
    "24/7 customer support"
];

const ReasonsToChooseUs = () => {
    return (

        <div className='ml-[80px] mt-[100px] mb-[70px]'>
            <div className='flex justify-between'>
            <div className='w-[700px]'>
                <Image src="/whyUs.jpg" width={700} height={600} alt="Why Us" />
            </div>
            <div className='w-[500px] '>
            <h2 className='text-[30px] text-gray-400 font-bold'>Reasons to Choose Our Service</h2>
            {reasons.map((reason, index) => (
                <div key={index} className='flex items-center mb-[50px]'>
                    <div className='w-[50px] h-[50px] bg-blue-300 mr-5 rounded-full flex items-center justify-center'>
                    
                    <p className='text-white'>{index + 1}</p>
                    </div>
                    
                    <p className='text-[20px] text-gray-400 font-bold ml-[20px]'>{reason}</p>
                </div>
            ))}
            </div>
           
            </div>

            
            
        </div>
    );
};

export default ReasonsToChooseUs;