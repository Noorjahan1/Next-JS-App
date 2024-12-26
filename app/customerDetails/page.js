'use client';
import React, { useState } from 'react';

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([
        {
            name: "John Doe",
            email: "example@email.com",
            phone: "1234567890",
            address: "123 Main St, Anytown, USA",
            Review: "We got a good service from this page I appreciate it to anybody."
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "0987654321",
            address: "456 Elm St, Othertown, USA",
            Review: "Excellent service and support!"
        },
        {
            name: "Alice Johnson",
            email: "alice@example.com",
            phone: "5555555555",
            address: "789 Oak St, Sometown, USA",
            Review: "Highly recommend this service."
        }
    ]);

    if (!customers || customers.length === 0) {
        return <div>No customer data available</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
            {customers.map((customer, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <p className="text-lg font-semibold mb-2"><strong>Name:</strong> {customer.name}</p>
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> {customer.email}</p>
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong> {customer.phone}</p>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> {customer.address}</p>
                    <p className="text-gray-700">{customer.Review}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerDetails;