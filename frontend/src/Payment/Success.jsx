import React from 'react';
import { Link } from 'react-router-dom';


const Success = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg text-gray-700">Your payment has been processed successfully.</p>
        <p className="text-lg text-gray-700">Thank you for your purchase.</p>
      
         <Link           className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
 to="/beltrangold/">
         Back to Home
   </Link>
      </div>
    </div>
  );
};

export default Success;
