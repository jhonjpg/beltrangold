import React, {useState} from 'react'
import {
    CardElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';


export const PaymentForm = () => {

    const CARD_OPTIONS = {
        // Personaliza las opciones según tus necesidades
        iconStyle: 'solid',
        style: {
          base: {
            iconColor: '#000',
            color: '#000',
            fontWeight: '400',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#ccc',
            },
          },
          invalid: {
            iconColor: 'red',
            color: 'red',
          },
        },
      };
      

const [success, setSuccess] = useState(false) 

const stripe = useStripe();



const handleSubmit = async (event) => {
    event.preventDefault();


    const {error, paymentMethod} = await stripe.createPaymentMethod({

        type: 'card',
        card: elements.getElement(CardElement),
        currency: 'usd',
    });
    if (!error) {

        try {

            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3000/payment",{

                amount:1000,
                id

            })

            if(response.data.success){

                console.log("sucessful payment")
                setSuccess(true)
            }
            
        } catch (error) {

            console.log("Erroe", error)
            
        }

        


        }else{

       console.log(erro.messege)
    }
}
return (
<>
  {!success ? (
    <form onSubmit={handleSubmit}>
      <fieldset className="formRow">
        <CardElement options={CARD_OPTIONS} />
      </fieldset>
      <button>Pay</button>
    </form>
  ) : (
    <div>Payment successful! You can display a success message or take any other appropriate action here.</div>
  )}
</>

)
}
