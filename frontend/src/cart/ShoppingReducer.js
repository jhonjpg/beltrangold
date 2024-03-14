import axios from 'axios';
import { TYPES } from '../cart/ShoppingAction';

export const updateShoppingInitial = async() => {



    try {

        // Intenta cargar los elementos del carrito del localStorage
        const localStorageCartItems = loadCartFromLocalStorage();

        // Si hay elementos en el localStorage, úsalos como cartItems
        if (localStorageCartItems.length > 0) {
            return {
                cartItems: localStorageCartItems,
                productCount: localStorageCartItems.length,
            };
        }
        const ringResponse = await axios.get('http://localhost:3002/ring');
        const pendantResponse = await axios.get('http://localhost:3002/pendant');
        const chainResponse = await axios.get('http://localhost:3002/chain');
        const braceletResponse = await axios.get('http://localhost:3002/bracelet');

        const cartItems = [];

        return {
            ring: ringResponse.data,
            pendant: pendantResponse.data,
            chain: chainResponse.data,
            bracelet: braceletResponse.data,
            cartItems: cartItems,
            productCount: cartItems.length, // Set productCount to the length of cartItems
        };

    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
};

export const loadCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
};

export const shoppingInitial = updateShoppingInitial();

// export const loadCartFromLocalStorage = () => {
//     const cartItems = localStorage.getItem('cartItems');
//     return cartItems ? JSON.parse(cartItems) : [];
// };



export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const saveProductCountToLocalStorage = (productCount) => {
    localStorage.setItem('productCount', productCount);
};

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.UPDATE_INITIAL:
            return {
                ...state,
                ...action.payload,
                cartItems: state.cartItems || [],
                productCount: state.cartItems ? state.cartItems.length : 0, // Update productCount with the length of cartItems
            };

        case TYPES.ADD_TO_CART:
            const product = action.payload;
            const isProductExist = state.cartItems.some(item => item.id === product.id);
            if (!isProductExist) {
                const updatedCartItems = [...state.cartItems, product];
                saveCartToLocalStorage(updatedCartItems);
                const updatedProductCount = state.productCount + 1;
                saveProductCountToLocalStorage(updatedProductCount); // Save updated productCount to local storage
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    productCount: updatedProductCount,
                };
            }
            return state; // If product already exists, return current state

        case TYPES.REMOVE_FROM_CART:
            const productIdToRemove = action.payload.id;
            const updatedCartItems = state.cartItems.filter(item => item.id !== productIdToRemove);
            saveCartToLocalStorage(updatedCartItems);
            const updatedProductCountAfterRemove = state.productCount - 1; // Decrement the count by 1
            saveProductCountToLocalStorage(updatedProductCountAfterRemove); // Save the new count to local storage
            return {
                ...state,
                cartItems: updatedCartItems,
                productCount: updatedProductCountAfterRemove,
            };


        case TYPES.CLEAR_CART:
            localStorage.removeItem('cartItems');
            localStorage.removeItem('productCount'); // Remove productCount from local storage when clearing the cart
            return {
                ...state,
                cartItems: [],
                productCount: 0,
            };


        default:
            return state;
    }
};

export default shoppingReducer;

// import axios from 'axios';
// import { TYPES } from '../cart/ShoppingAction';

// export const shoppingInitial = async() => {
//     try {
//         const ringResponse = await axios.get('http://localhost:3002/ring');
//         const pendantResponse = await axios.get('http://localhost:3002/pendant');
//         const chainResponse = await axios.get('http://localhost:3002/chain');
//         const braceletResponse = await axios.get('http://localhost:3002/bracelet');

//         const cartItems = []; // Initialize an empty cart

//         return {
//             ring: ringResponse.data, // Assuming ringResponse contains an array of ring products
//             pendant: pendantResponse.data, // Assuming pendantResponse contains an array of pendant products
//             chain: chainResponse.data, // Assuming chainResponse contains an array of chain products
//             bracelet: braceletResponse.data, // Assuming braceletResponse contains an array of bracelet products
//             cartItems: cartItems, // Include the cartItems property
//             productCount: 0, // You might initialize other properties here
//         };

//     } catch (error) {
//         console.error('Error fetching product data:', error);
//         // Handle the error as needed
//         throw error; // Re-throw the error to propagate it further if necessary
//     }
// };


// const shoppingReducer = (state, action) => {
//     switch (action.type) {

//         case TYPES.ADD_TO_CART:
//             const newItem = action.payload;
//             const itemCart = state.cartItems.find((item) => item.id === newItem.id);


//             return itemCart ? {

//                 ...state,
//                 cartItems: state.cartItems.map(item => item.id === newItem.id)
//             } : {

//                 ...state,
//                 cartItems: [...state.cartItems, newItem]

//             }

//             // if (itemCart) {
//             //     // If the product with the same ID is already in the cart, update the quantity.
//             //     const updatedCart = state.cartItems.map((item) => {
//             //         if (item.id === product.id) {
//             //             return {...item, quantity: item.quantity + 1 };
//             //         }
//             //         return item;
//             //     });

//             //     // Guarda el carrito actualizado en el almacenamiento local
//             //     saveCartToLocalStorage(updatedCart);

//             //     return {
//             //         ...state,
//             //         cartItems: updatedCart,
//             //     };
//             // } else {
//             //     // If it's a new product, add it to the cart.
//             //     const updatedCart = [
//             //         ...state.cartItems,
//             //         {
//             //             ...product,
//             //             quantity: 1,
//             //         },
//             //     ];

//             //     // Incrementa el contador de productos solo si es un producto nuevo
//             //     const updatedProductCount = state.productCount + 1;

//             //     // Guarda el carrito actualizado en el almacenamiento local
//             //     saveCartToLocalStorage(updatedCart);



//         case TYPES.REMOVE_FROM_CART:
//             const itemIdToRemove = action.payload.id;
//             const updatedCartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);

//             return {
//                 ...state,
//                 cartItems: updatedCartItems
//             };

//         case TYPES.CLEAR_CART:
//             return {
//                 ...state,
//                 cartItems: [],
//                 productCount: 0
//             };
//         default:
//             return state;
//     }
// };

// export default shoppingReducer;