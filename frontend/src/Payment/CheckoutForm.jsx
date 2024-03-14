// import React, { useState } from 'react';
// import {
//   PaymentElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
// import axios from 'axios'; // Importa Axios


// const calculateTotalPrice = (cartItems) => {
//   let totalAmount = 0;

//   for (const item of cartItems) {
//     totalAmount += Math.floor(item.price.unit_amount / 100) * item.quantity;
//   }

//   return totalAmount;
// };


// const CheckoutForm = ({ cartItems }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   console.log(cartItems, "toto")


//   const [errorMessage, setErrorMessage] = useState(null);
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
  
//     // Realiza la solicitud a tu servidor para obtener el clientSecret
//     try {
//       const totalAmount = calculateTotalPrice(cartItems);

//       const requestData = {
//         items: cartItems,
//         amount: totalAmount, // Asegúrate de que totalAmount esté configurado adecuadamente
//         // Otros datos que se están enviando
//       };
  
//       console.log("Data being sent to the server:", requestData);
  
     
      
//           // Realiza una solicitud al servidor para obtener el clientSecret
//       const response = await axios.post('http://localhost:4000/get-client-secret', {
//          items: cartItems,
//         amount: totalAmount, // Envía el monto total al servidor
//         cartItems, // Envía los detalles de los productos al servidor si es necesario
//       });

//       const { data: { client_secret } } = response; // Obtén el clientSecret de la respuesta

//       console.log("Client secret received:", client_secret);
    
//       // Ahora tienes el clientSecret y puedes continuar con la confirmación del pago
//       const { error } = await stripe.confirmPayment({
//         elements,  // Asegúrate de que elements esté definido en tu contexto
//         clientSecret,
//         confirmParams: {
//           return_url: 'http://localhost:4000/complete',
//         },
//       });
  
//       if (error) {
//         setErrorMessage(error.message);
//       } else {
//         // El cliente será redirigido a tu `return_url`.
//       }
//     } catch (error) {
//       // Manejar errores de la solicitud Axios, por ejemplo, si no puedes conectarte al servidor
//       console.error('Error al obtener el clientSecret:', error);
//     }
//   };

  

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe || !elements}>
//         Pay
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;




import React, { useEffect, useState } from 'react';
import { PaymentElement, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../cart/Cart'; // Importa el componente de carrito
import axios from "axios";

const stripePromise = loadStripe("pk_test_51MnoUeJ7yUZjpqzGkGLYeAlsFTDqVd41W339xKyG9W8gApNFJmrgQtBDah7zxfIX010Xhccq0OXpj8BeHSVVaM8O00HStUanyh")

const calculateTotalPrice = (cartItems) => {
  let totalAmount = 0;

  for (const item of cartItems) {
    totalAmount += Math.floor(item.price.unit_amount / 100) * item.quantity;
  }

  return totalAmount;
};



const CheckoutForm = ({ cartItems, clientSecret }) => {


    const stripe = useStripe();


      //Selecciona elemento de pago

  //Para habilitar boton de pago
  const [loading, setLoading] = useState(false)

  const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     setLoading(true); // Set loading to true before the API call
  
//     // Create a payment method with CardElement
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });
  
//     if (!error) {
//       // Extract the payment method id
//       const { id } = paymentMethod;
  
//       try {
//         // Calculate the total amount based on the cart items
//         const totalAmount = calculateTotalPrice(cartItems);
  
//         // Send the payment using the payment method id and total amount
//         const {data} = await axios.post('http://localhost:3001/checkout', {
//           id,
//           amount: totalAmount * 100, // Convert to cents
//         });
  
//         console.log(data);
  
//         // Clear the CardElement
//         elements.getElement(CardElement).clear();
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       // Handle payment method creation error here
//       console.error(error);
//     }
  
//     setLoading(false); // Set loading back to false after the API call
//   };
  


const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  
    if (!error) {
      const { id } = paymentMethod;
  
      try {
        const totalAmount = calculateTotalPrice(cartItems);
  
        // Usa el clientSecret para confirmar el pago
        const { data } = await axios.post('http://localhost:3001/get-client-secret', {
          id,
          amount: totalAmount * 100, // Convierte a centavos
        });
  
        console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error(error);
    }
  
    setLoading(false);
  };
  
  const [errorMessage, setErrorMessage] = useState(null);


  return (
    <form onSubmit={handleSubmit} className="card card-body justify-content-center">
    {/* Nos genera elementos en frontend */}
    <img 
      src="https://img1.freepng.es/20180215/tjq/kisspng-arecaceae-plant-leaf-palm-branch-potted-green-plants-5a85705db4e984.371379691518694493741.jpg" 
      alt="planta"
      width={200}
      className="img-fluid"/>

    <h3 className="text-center my-10">Price $100</h3>

    <PaymentElement className="form-control"/>

    <button className="btn btn-success" disabled={!stripe}>
      {loading ? (
        <div className="spinner-border text-ligth" role="status">
          <span className="sr-only"></span>
        </div>
      ): "Comprar"}
      
    </button>
  </form>
  );
};




const StripeContain = ({ cartItems }) => {

    // En el componente donde utilizas CheckoutForm
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        // Realiza una solicitud al backend para obtener el clientSecret
        axios.post('http://localhost:3002/checkout', {
            // Pasa los datos necesarios desde el frontend al backend si es necesario
            // Esto depende de cómo está configurado tu backend
            id: '', // Rellenar con el valor correcto
            amount: 0, // Rellenar con el valor correcto
        })
            .then((response) => {
                setClientSecret(response.data.clientSecret);
            })
            .catch((error) => {
                console.error('Error al obtener el clientSecret', error);
            });
    }, []);


console.log("maldita response", clientSecret)

  return (
    <Elements stripe={stripePromise}>
    <div className="full flex pt-20">
        <div className="w-1/2">
            <Cart cartItems={cartItems} />
        </div>
        <div className="w-1/2">
            <CheckoutForm clientSecret={clientSecret} cartItems={cartItems} />
        </div>
    </div>
</Elements> )
}

export default StripeContain