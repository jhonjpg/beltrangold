const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
// const {FRONEND_URL} = require('./config');


// Variables de entorno configuracion
require('dotenv').config();

// Aplicación de BackEnd
const app = express();

// Llave privada - utilizar variable de entorno para Node.js
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configuración de correo electrónico


app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());


// Obtener productos de tipo "pendant"
app.get('/pendant', async(req, res) => {
    try {
        const limit = 30;
        const products = await getAllProducts(limit);
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes('pendant'));
        const productWithPrices = await getProductsAndPrices(filteredProducts);
        res.json(productWithPrices);
    } catch (error) {
        console.error('Error fetching pendant products from Stripe:', error);
        res.status(500).json({ error: 'Error fetching pendant products' });
    }
});

// Obtener productos de tipo "bracelet"
app.get('/bracelet', async(req, res) => {
    try {
        const limit = 30;
        const products = await getAllProducts(limit);
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes('bracelet'));
        const productWithPrices = await getProductsAndPrices(filteredProducts);
        res.json(productWithPrices);
    } catch (error) {
        console.error('Error al obtener los productos de pulseras de Stripe:', error);
        res.status(500).json({ error: 'Error al obtener los productos de pulseras' });
    }
});

// Obtener productos de tipo "chain"
app.get('/chain', async(req, res) => {
    try {
        const limit = 30;
        const products = await getAllProducts(limit);
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes('chain'));
        const productWithPrices = await getProductsAndPrices(filteredProducts);
        res.json(productWithPrices);
    } catch (error) {
        console.error('Error al obtener los productos de cadenas de Stripe:', error);
        res.status(500).json({ error: 'Error al obtener los productos de cadenas' });
    }
});

// Obtener productos de tipo "ring"
app.get('/ring', async(req, res) => {
    try {
        const limit = 30;
        const products = await getAllProducts(limit);
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes('ring'));
        const productWithPrices = await getProductsAndPrices(filteredProducts);
        res.json(productWithPrices);
    } catch (error) {
        console.error('Error al obtener los productos de anillos de Stripe:', error);
        res.status(500).json({ error: 'Error al obtener los productos de anillos' });
    }
});

// Obtener todos los productos con precios
app.get('/jewelrys', async(req, res) => {
    try {
        const products = await stripe.products.list();
        const productWithPrices = await getProductsAndPrices(products.data);
        res.json(productWithPrices);


    } catch (error) {
        console.error('Error al obtener los productos de Stripe:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});




app.get('/all', async(req, res) => {
    try {
        const limit = 30;
        const products = await getAllProducts(limit);
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes(''));
        const productWithPrices = await getProductsAndPrices(filteredProducts);
        res.json(productWithPrices);
    } catch (error) {
        console.error('Error al obtener los productos de anillos de Stripe:', error);
        res.status(500).json({ error: 'Error al obtener los productos de anillos' });
    }
});



app.post('/create-checkout-session', async(req, res) => {
    try {
        const cartItems = req.body.cartItems;
        if (!cartItems || !Array.isArray(cartItems)) {
            return res.status(400).send('Error: cartItems is not defined or not an array');
        }

        const lineItems = cartItems.map((item) => {

            console.log(item.images, "lacret")

            if (!item.price || !item.price.unit_amount || !item.images) {
                return res.status(400).send('Error: Invalid price data in cartItems');
            }
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: item.images,
                    },
                    unit_amount: item.price.unit_amount,
                },
                quantity: item.quantity || 1, // Include quantity if available, default to 1
            };
        });

        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            shipping_options: [{
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 0,
                            currency: 'usd',
                        },
                        display_name: 'Free shipping',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 7,
                            },
                        },
                    },
                },
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 1500,
                            currency: 'usd',
                        },
                        display_name: 'Next day air',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 1,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 1,
                            },
                        },
                    },
                },
            ],
            phone_number_collection: {
                enabled: true,
            },
            payment_method_types: ['card'],
            line_items: lineItems, // Correctly defining line_items
            mode: 'payment',
            success_url: 'http://localhost:5173/beltrangold/success',
            cancel_url: 'http://localhost:5173/beltrangold',
        });

        res.send({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send('Error creating checkout session');
    }
});



// Crear sesión de pago
// app.post('/create-checkout-session', async(req, res) => {
//     const lineItems = req.body.cartItems.map((item) => {
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: item.name,
//                     images: [item.image],
//                 },
//                 unit_amount: item.price.unit_amount * 100,
//             },
//             quantity: 1,
//         };
//     });

//     const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: {
//             allowed_countries: ['US', 'CA'],
//         },
//         shipping_options: [{
//                 shipping_rate_data: {
//                     type: 'fixed_amount',
//                     fixed_amount: {
//                         amount: 0,
//                         currency: 'usd',
//                     },
//                     display_name: 'Free shipping',
//                     delivery_estimate: {
//                         minimum: {
//                             unit: 'business_day',
//                             value: 5,
//                         },
//                         maximum: {
//                             unit: 'business_day',
//                             value: 7,
//                         },
//                     },
//                 },
//             },
//             {
//                 shipping_rate_data: {
//                     type: 'fixed_amount',
//                     fixed_amount: {
//                         amount: 1500,
//                         currency: 'usd',
//                     },
//                     display_name: 'Next day air',
//                     delivery_estimate: {
//                         minimum: {
//                             unit: 'business_day',
//                             value: 1,
//                         },
//                         maximum: {
//                             unit: 'business_day',
//                             value: 1,
//                         },
//                     },
//                 },
//             },
//         ],
//         phone_number_collection: {
//             enabled: true,
//         },
//         payment_method_types: ['card'],
//         line_items,
//         mode: 'payment',
//         success_url: 'http://localhost:5173/beltrangold/success',
//         cancel_url: 'http://localhost:5173/beltrangold',
//     });

//     res.send({ url: session.url });
// });

// app.post('/create-checkout-session', async(req, res) => {
//     const lineItems = req.body.cartItems.map((item) => {
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: item.name,
//                     images: [item.image],
//                 },
//                 unit_amount: item.price.unit_amount * 100,
//             },
//             quantity: 1,
//         };
//     });

//     // Aquí se utiliza lineItems correctamente
//     // ...
// });


// Obtener cliente secreto para el pago
app.post('/get-client-secret', async(req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const items = req.body.items;
        const amount = calculateAmount(items);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'USD',
        });

        res.json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error al obtener el cliente secreto:', error);
        res.status(500).json({ error: 'Error al obtener el cliente secreto' });
    }
});

// Función para obtener todos los productos
const getAllProducts = async(limit) => {
    const allProducts = [];
    let hasMore = true;
    let startingAfter;

    while (hasMore) {
        const result = await stripe.products.list({ limit, starting_after: startingAfter });
        allProducts.push(...result.data);

        if (result.data.length < limit) {
            hasMore = false;
        } else {
            startingAfter = result.data[result.data.length - 1].id;
        }
    }

    return { data: allProducts };
};

// Función para obtener productos y precios
const getProductsAndPrices = async(filteredProducts) => {
    const productIds = filteredProducts.map(product => product.id);
    const prices = await Promise.all(productIds.map(productId => stripe.prices.list({ product: productId })));

    const productsWithPrices = filteredProducts.map(product => {
        const price = prices.find(p => p.data[0].product === product.id);
        return {...product, price: price.data[0] };
    });

    return productsWithPrices;
};

// Función para calcular el monto total
const calculateAmount = (items) => {
    let totalAmount = 0;

    for (const item of items) {
        if (item.price && item.quantity) {
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity, 10);
            if (!isNaN(price) && !isNaN(quantity) && price >= 1 && quantity >= 1) {
                totalAmount += price * quantity;
            }
        }
    }

    return Math.max(totalAmount, 1); // Asegura que el monto mínimo sea 1
};



app.post("/checkout", async(req, res) => {
    const cartItems = req.body.cartItems;

    // Verificar si cartItems está definido y es un array
    if (cartItems && Array.isArray(cartItems)) {
        let arrayItems = [];
        // Aquí también puedes verificar si cartItems no está vacío antes de usar map
        cartItems.forEach(item => {
            arrayItems.push({
                price: item.priceId, // Utiliza el ID de precio en lugar del ID de producto
                quantity: item.quantity // Asegúrate de incluir la cantidad si es necesario
            });
        });

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: "http://localhost:3002/success",
                cancel_url: "http://localhost:3002/cancel"
            });

            res.send(JSON.stringify({ url: session.url }));
        } catch (error) {
            console.error('Error creating checkout session:', error);
            res.status(500).json({ error: 'Error creating checkout session' });
        }
    } else {
        // Manejar el caso en que cartItems no está definido o no es un array
        console.error('Error: cartItems is not defined or not an array');
        res.status(400).json({ error: 'Invalid cartItems' });
    }
});







app.listen(3002, () => {
    console.log('Server on port', 3002);
});
