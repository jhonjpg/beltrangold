import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import emailjs from 'emailjs-com';


const CartPaypal = ({ cartItems, removeFromCart,  }) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const history = useHistory(); // Inicializa el hook de navegación




  const handlePaymentSuccess = (details, data) => {
    console.log('Transacción completada:', details);
    sendOrderConfirmationEmail(cart, 'beltrancoenterprise@gmail.com');
    setShowSuccessMessage(true);

    // Vacía el carrito
    const updatedCart = [];
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);

    // Redirige al inicio después de un retraso de 2 segundos
    setTimeout(() => {
      history.push('/'); // Cambia '/home' por la ruta que desees
    }, 2000);
  }





  emailjs.init('jonathan050315jj@gmail.com');

  useEffect(() => {
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCart(parsedCartData);
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
    removeFromCart(product);

  };

 
  function sendOrderConfirmationEmail(orderData, userEmail) {
    const mailOptions = {
      from: 'beltrancoenterprise@gmail.com',
      to: userEmail, // Debes proporcionar la dirección de correo del cliente
      subject: 'Confirmación de Pedido',
      html: `<p>Gracias por tu pedido. A continuación, encontrarás los detalles de tu compra:</p><p>${orderData}</p>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Error al enviar el correo: ' + error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
  }
  const [cart, setCart] = useState([]);


  const calculateTotalPrice = (cartItems) => {

    useEffect(() => {
      // Cargar los datos del carrito desde el almacenamiento local al montar el componente
      const cartData = localStorage.getItem('cartItems');
      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        // Actualizar el estado del carrito con los datos del almacenamiento local
        setCart(parsedCartData);
      }
    }, []);
  
    
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.prices * item.quantity;
    }
    return totalPrice;
  };
  
  
  


  return (
    <div className="lg:flex lg:space-x-4 pt-20 z-30	">


      {/* Carrito */}
      <div className="lg:w-3/4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg mb-4">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-200">
                <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm">Cantidad: {item.quantity}</p>
              </div>
            </div>
            <div className="text-xl font-semibold">
              Total: ${item.prices * item.quantity}
            </div>
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="text-red-600 hover:underline"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {showSuccessMessage && (
        <Notification
          message="¡Su compra se ha realizado con éxito!"
          type="success" // You can define a CSS class for styling success messages
          onClose={() => setShowSuccessMessage(false)}
        />
      )}

      {/* Forma de pago */}
      <div className="lg:w-1/4">
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Resumen de compra</h2>
          <div className="flex justify-between mb-2">
            <span>Total:</span>
            <span>${calculateTotalPrice(cart)}</span>
          </div>

  <PayPalButton
    amount={calculateTotalPrice(cart)}
    options={{
      clientId: 'ASn1-EDrFSXfqzAp_7p2Mierz2nI7YVnyt9LnR1Sklw9_WyTGf_rIjemsQ9kVCUxXmdzdUehl_-QqEEg',
      currency: 'USD',
    }}
    onSuccess={(details, data) => {
      // Lógica cuando la transacción de PayPal sea exitosa
      console.log('Transacción completada:', details);
      sendOrderConfirmationEmail(cart, 'beltranco@gmail.com');
    }}
    onError={(error) => {
      // Lógica en caso de error en la transacción de PayPal
      console.error('Error en la transacción de PayPal:', error);
    }}
  />
        </div>
      </div>
    </div>

    
  );
};


export default CartPaypal;



















