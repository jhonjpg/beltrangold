import React, { useEffect } from 'react';

const StripeCartPay = ({ checkoutUrl, loading, handleDataUrl }) => {

  useEffect(() => {
    console.log("Checkout URL in StripeCartPay:", checkoutUrl);

    if (!loading && checkoutUrl && handleDataUrl) {
      // Redirect to Checkout at the top level
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl, loading, handleDataUrl]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-400">
      <p>Loading...</p>
    </div>
  );
};

export default StripeCartPay;
