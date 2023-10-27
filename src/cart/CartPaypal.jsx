import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import emailjs from 'emailjs-com';
import { StrictMode } from 'react';


const CartPaypal = ({ cartItems, removeFromCart }) => {

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
      from: 'tuCorreo@gmail.com',
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

      {/* Forma de pago */}
      <div className="lg:w-1/4">
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Resumen de compra</h2>
          <div className="flex justify-between mb-2">
            <span>Total:</span>
            <span>${calculateTotalPrice(cart)}</span>
          </div>

          <StrictMode>
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
</StrictMode>

        </div>
      </div>
    </div>
  );
};


export default CartPaypal;







































// import { TYPES } from '../cart/ShoppingAction';




// export const shoppingInitial = {
//     products: {

//         "ring": [{
//                 "id": 0,
//                 "img": "img/rings/ring1.jpg",
//                 "name": "Sapphire Elegance Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 1,
//                 "img": "img/rings/ring2.jpg",
//                 "name": "Emerald Harmony Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 2,
//                 "img": "img/rings/ring3.jpg",
//                 "name": "Diamond Dream Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 3,
//                 "img": "img/rings/ring4.jpg",
//                 "name": "Ruby Radiance Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 4,
//                 "img": "img/rings/ring5.jpg",
//                 "name": "Pearl Perfection Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 5,
//                 "img": "img/rings/ring6.jpg",
//                 "name": "Amethyst Allure Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 6,
//                 "img": "img/rings/ring7.jpg",
//                 "name": "Topaz Treasure Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 7,
//                 "img": "img/rings/ring8.jpg",
//                 "name": "Aquamarine Adorn Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 8,
//                 "img": "img/rings/ring9.jpg",
//                 "name": "Opal Odyssey Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 9,
//                 "img": "img/rings/ring10.jpg",
//                 "name": "Citrine Charm Ring",
//                 "prices": 40
//             },
//             {
//                 "id": 10,
//                 "img": "img/rings/ring11.jpg",
//                 "name": "Garnet Gleam Ring",
//                 "prices": 40
//             }
//         ],

//         "bracelet": [{
//                 "id": 0,
//                 "img": "img/bracelet/bracelet1.jpg",
//                 "name": "Silver Link Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 1,
//                 "img": "img/bracelet/bracelet2.jpg",
//                 "name": "Gold Bangle Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 2,
//                 "img": "img/bracelet/bracelet3.jpg",
//                 "name": "Pearl Charm Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 3,
//                 "img": "img/bracelet/bracelet4.jpg",
//                 "name": "Leather Cuff Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 4,
//                 "img": "img/bracelet/bracelet5.jpg",
//                 "name": "Crystal Tennis Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 5,
//                 "img": "img/bracelet/bracelet6.jpg",
//                 "name": "Diamond Bangle Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 6,
//                 "img": "img/bracelet/bracelet7.jpg",
//                 "name": "Gemstone Link Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 7,
//                 "img": "img/bracelet/bracelet8.jpg",
//                 "name": "Enamel Cuff Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 8,
//                 "img": "img/bracelet/bracelet9.jpg",
//                 "name": "Silver Heart Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 9,
//                 "img": "img/bracelet/bracelet10.jpg",
//                 "name": "Chain Link Bracelet",
//                 "prices": 40
//             },
//             {
//                 "id": 10,
//                 "img": "img/bracelet/bracelet11.jpg",
//                 "name": "Rose Gold Cuff Bracelet",
//                 "prices": 40
//             }
//         ],
//         "necklace": [{
//                 "id": 0,
//                 "img": "img/necklace/necklace1.jpg",
//                 "name": "Diamond Solitaire Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 1,
//                 "img": "img/necklace/necklace2.jpg",
//                 "name": "Pearl Strand Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 2,
//                 "img": "img/necklace/necklace3.jpg",
//                 "name": "Heart-Shaped Locket Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 3,
//                 "img": "img/necklace/necklace4.jpg",
//                 "name": "Cross Pendant Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 4,
//                 "img": "img/necklace/necklace5.jpg",
//                 "name": "Charm Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 5,
//                 "img": "img/necklace/necklace6.jpg",
//                 "name": "Gemstone Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 6,
//                 "img": "img/necklace/necklace7.jpg",
//                 "name": "Initial Pendant Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 7,
//                 "img": "img/necklace/necklace8.jpg",
//                 "name": "Tennis Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 8,
//                 "img": "img/necklace/necklace9.jpg",
//                 "name": "Bar Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 9,
//                 "img": "img/necklace/necklace10.jpg",
//                 "name": "Statement Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 10,
//                 "img": "img/necklace/necklace11.jpg",
//                 "name": "Pendant Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 11,
//                 "img": "img/necklace/necklace12.jpg",
//                 "name": "Collar Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 12,
//                 "img": "img/necklace/necklace13.jpg",
//                 "name": "Layered Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 13,
//                 "img": "img/necklace/necklace14.jpg",
//                 "name": "Infinity Necklace",
//                 "prices": 40
//             },
//             {
//                 "id": 14,
//                 "img": "img/necklace/necklace15.jpg",
//                 "name": "Choker Necklace",
//                 "prices": 40
//             }
//         ]
//     },
//     cartItems: [],
//     productCount: 0, // Agrega un contador de productos

// };

// const saveCartToLocalStorage = (cart) => {
//     localStorage.setItem('cartItems', JSON.stringify(cart));
// };

// export const shoppingReducer = (state = shoppingInitial, action) => {
//     // ... (tu código del reducer aquí)

//     switch (action.type) {
//         case TYPES.ADD_TO_CART:
//             const product = action.payload;
//             const itemCart = state.cartItems.find((item) => item.id === product.id);

//             if (itemCart) {
//                 // If the product with the same ID is already in the cart, update the quantity.
//                 const updatedCart = state.cartItems.map((item) => {
//                     if (item.id === product.id) {
//                         return {...item, quantity: item.quantity + 1 };
//                     }
//                     return item;
//                 });

//                 // Guarda el carrito actualizado en el almacenamiento local
//                 saveCartToLocalStorage(updatedCart);

//                 return {
//                     ...state,
//                     cartItems: updatedCart,
//                 };
//             } else {
//                 // If it's a new product, add it to the cart.
//                 const updatedCart = [
//                     ...state.cartItems,
//                     {
//                         ...product,
//                         quantity: 1,
//                     },
//                 ];

//                 // Incrementa el contador de productos solo si es un producto nuevo
//                 const updatedProductCount = state.productCount + 1;

//                 // Guarda el carrito actualizado en el almacenamiento local
//                 saveCartToLocalStorage(updatedCart);

//                 return {
//                     ...state,
//                     cartItems: updatedCart,
//                     productCount: updatedProductCount,
//                 };
//             }

//         case TYPES.REMOVE_FROM_CART:
//             const productToRemove = action.payload;
//             const itemInCart = state.cartItems.find((item) => item.id === productToRemove.id);

//             if (itemInCart) {
//                 const updatedCart = state.cartItems
//                     .map((item) => {
//                         if (item.id === productToRemove.id) {
//                             return {...item, quantity: item.quantity - 1 };
//                         }
//                         return item;
//                     })
//                     .filter((item) => item.quantity > 0);

//                 // Guarda el carrito actualizado en el almacenamiento local
//                 saveCartToLocalStorage(updatedCart);

//                 return {
//                     ...state,
//                     cartItems: updatedCart,
//                     productCount: state.productCount - 1,
//                 };
//             } else {
//                 // El producto no está en el carrito, no se realiza ninguna acción
//                 return state;
//             }

//         case TYPES.CLEAR_CART:
//             localStorage.removeItem('cartItems');
//             return {
//                 ...state,
//                 cartItems: [],
//                 productCount: 0,
//             };

//         default:
//             return state;
//     }
// };