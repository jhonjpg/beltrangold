import { TYPES } from '../cart/ShoppingAction';




export const shoppingInitial = {
    products: {

        "ring": [{
                "id": 0,
                "img": "img/rings/ring1.jpg",
                "name": "Sapphire Elegance Ring",
                "prices": 40
            },
            {
                "id": 1,
                "img": "img/rings/ring2.jpg",
                "name": "Emerald Harmony Ring",
                "prices": 40
            },
            {
                "id": 2,
                "img": "img/rings/ring3.jpg",
                "name": "Diamond Dream Ring",
                "prices": 40
            },
            {
                "id": 3,
                "img": "img/rings/ring4.jpg",
                "name": "Ruby Radiance Ring",
                "prices": 40
            },
            {
                "id": 4,
                "img": "img/rings/ring5.jpg",
                "name": "Pearl Perfection Ring",
                "prices": 40
            },
            {
                "id": 5,
                "img": "img/rings/ring6.jpg",
                "name": "Amethyst Allure Ring",
                "prices": 40
            },
            {
                "id": 6,
                "img": "img/rings/ring7.jpg",
                "name": "Topaz Treasure Ring",
                "prices": 40
            },
            {
                "id": 7,
                "img": "img/rings/ring8.jpg",
                "name": "Aquamarine Adorn Ring",
                "prices": 40
            },
            {
                "id": 8,
                "img": "img/rings/ring9.jpg",
                "name": "Opal Odyssey Ring",
                "prices": 40
            },
            {
                "id": 9,
                "img": "img/rings/ring10.jpg",
                "name": "Citrine Charm Ring",
                "prices": 40
            },
            {
                "id": 10,
                "img": "img/rings/ring11.jpg",
                "name": "Garnet Gleam Ring",
                "prices": 40
            }
        ],

        "bracelet": [{
                "id": 0,
                "img": "img/bracelet/bracelet1.jpg",
                "name": "Silver Link Bracelet",
                "prices": 40
            },
            {
                "id": 1,
                "img": "img/bracelet/bracelet2.jpg",
                "name": "Gold Bangle Bracelet",
                "prices": 40
            },
            {
                "id": 2,
                "img": "img/bracelet/bracelet3.jpg",
                "name": "Pearl Charm Bracelet",
                "prices": 40
            },
            {
                "id": 3,
                "img": "img/bracelet/bracelet4.jpg",
                "name": "Leather Cuff Bracelet",
                "prices": 40
            },
            {
                "id": 4,
                "img": "img/bracelet/bracelet5.jpg",
                "name": "Crystal Tennis Bracelet",
                "prices": 40
            },
            {
                "id": 5,
                "img": "img/bracelet/bracelet6.jpg",
                "name": "Diamond Bangle Bracelet",
                "prices": 40
            },
            {
                "id": 6,
                "img": "img/bracelet/bracelet7.jpg",
                "name": "Gemstone Link Bracelet",
                "prices": 40
            },
            {
                "id": 7,
                "img": "img/bracelet/bracelet8.jpg",
                "name": "Enamel Cuff Bracelet",
                "prices": 40
            },
            {
                "id": 8,
                "img": "img/bracelet/bracelet9.jpg",
                "name": "Silver Heart Bracelet",
                "prices": 40
            },
            {
                "id": 9,
                "img": "img/bracelet/bracelet10.jpg",
                "name": "Chain Link Bracelet",
                "prices": 40
            },
            {
                "id": 10,
                "img": "img/bracelet/bracelet11.jpg",
                "name": "Rose Gold Cuff Bracelet",
                "prices": 40
            }
        ],
        "necklace": [{
                "id": 0,
                "img": "img/necklace/necklace1.jpg",
                "name": "Diamond Solitaire Necklace",
                "prices": 40
            },
            {
                "id": 1,
                "img": "img/necklace/necklace2.jpg",
                "name": "Pearl Strand Necklace",
                "prices": 40
            },
            {
                "id": 2,
                "img": "img/necklace/necklace3.jpg",
                "name": "Heart-Shaped Locket Necklace",
                "prices": 40
            },
            {
                "id": 3,
                "img": "img/necklace/necklace4.jpg",
                "name": "Cross Pendant Necklace",
                "prices": 40
            },
            {
                "id": 4,
                "img": "img/necklace/necklace5.jpg",
                "name": "Charm Necklace",
                "prices": 40
            },
            {
                "id": 5,
                "img": "img/necklace/necklace6.jpg",
                "name": "Gemstone Necklace",
                "prices": 40
            },
            {
                "id": 6,
                "img": "img/necklace/necklace7.jpg",
                "name": "Initial Pendant Necklace",
                "prices": 40
            },
            {
                "id": 7,
                "img": "img/necklace/necklace8.jpg",
                "name": "Tennis Necklace",
                "prices": 40
            },
            {
                "id": 8,
                "img": "img/necklace/necklace9.jpg",
                "name": "Bar Necklace",
                "prices": 40
            },
            {
                "id": 9,
                "img": "img/necklace/necklace10.jpg",
                "name": "Statement Necklace",
                "prices": 40
            },
            {
                "id": 10,
                "img": "img/necklace/necklace11.jpg",
                "name": "Pendant Necklace",
                "prices": 40
            },
            {
                "id": 11,
                "img": "img/necklace/necklace12.jpg",
                "name": "Collar Necklace",
                "prices": 40
            },
            {
                "id": 12,
                "img": "img/necklace/necklace13.jpg",
                "name": "Layered Necklace",
                "prices": 40
            },
            {
                "id": 13,
                "img": "img/necklace/necklace14.jpg",
                "name": "Infinity Necklace",
                "prices": 40
            },
            {
                "id": 14,
                "img": "img/necklace/necklace15.jpg",
                "name": "Choker Necklace",
                "prices": 40
            }
        ]
    },
    cartItems: [],
    productCount: 0, // Agrega un contador de productos

};

// Define a function to load the cart from local storage
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const shoppingReducer = (state = shoppingInitial, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            const product = action.payload;
            const itemCart = state.cartItems.find((item) => item.id === product.id);

            if (itemCart) {
                // If the product with the same ID is already in the cart, update the quantity.
                const updatedCart = state.cartItems.map((item) => {
                    if (item.id === product.id) {
                        return {...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });

                // Guarda el carrito actualizado en el almacenamiento local
                saveCartToLocalStorage(updatedCart);

                return {
                    ...state,
                    cartItems: updatedCart,
                };
            } else {
                // If it's a new product, add it to the cart.
                const updatedCart = [
                    ...state.cartItems,
                    {
                        ...product,
                        quantity: 1,
                    },
                ];

                // Incrementa el counter solo si es un producto nuevo
                const updatedProductCount = state.productCount + 1;

                // Guarda el carrito actualizado en el almacenamiento local
                saveCartToLocalStorage(updatedCart);

                return {
                    ...state,
                    cartItems: updatedCart,
                    productCount: updatedProductCount,
                };
            }


        case TYPES.REMOVE_FROM_CART:
            // Verifica si action.payload está definido y tiene una propiedad 'id'
            if (!action.payload || typeof action.payload.id === 'undefined') {
                // Si action.payload es undefined o no tiene una propiedad 'id' definida, no hagas nada.
                return state;
            }

            const updatedCartAfterRemove = state.cartItems.filter((item) => item.id !== action.payload.id);

            // Guarda el carrito actualizado en el almacenamiento local
            saveCartToLocalStorage(updatedCartAfterRemove);

            return {
                ...state,
                cartItems: updatedCartAfterRemove,
                productCount: state.productCount - 1, // Decrementa productCount
            };

        case TYPES.CLEAR_CART:
            // Limpia el carrito y el almacenamiento local
            localStorage.removeItem('cartItems');

            return {
                ...state,
                cartItems: [], // Borra todos los elementos del carrito al despachar esta acción
                productCount: 0, // Establece productCount a 0 al limpiar el carrito
            };

        case TYPES.SET_CART:
            return {
                ...state,
                cartItems: action.payload, // Establece el carrito con los elementos proporcionados
                productCount: action.payload.length, // Actualiza la cantidad de productos en el carrito
            };

        default:
            return state;
    }
};