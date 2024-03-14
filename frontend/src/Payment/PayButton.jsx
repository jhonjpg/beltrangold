import React from 'react';
import axios from 'axios';

const PayButton = ({ cartItems }) => {

    console.log(cartItems, "mixtape")
    
  const handleCheckOut = () => {
    if (!cartItems || !Array.isArray(cartItems)) {
      console.error('Error: cartItems is not defined or not an array');
      return;
    }

    axios
      .post('http://localhost:3002/create-checkout-session', {
        cartItems
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error, "algo salio mal");
      });
  };

  return <button onClick={handleCheckOut}>PayButton</button>;
};

export default PayButton;
