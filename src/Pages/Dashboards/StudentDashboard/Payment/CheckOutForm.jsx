import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import useAuth from '../../../../Hooks/useAuth';

const CheckOutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useAuth()
    const [cardError,setCardError]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    useEffect(()=>{
        console.log(price)
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(price)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setClientSecret(data.clientSecret)})
    },[price])
    const handleSubmit= async (event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            setCardError(error.message)
          } else {
            setCardError('')
            // console.log( paymentMethod);
          }

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent )     
    }
    return (
        <>
        <form className='w-1/2 m-10' onSubmit={handleSubmit} >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='flex items-center gap-2 mt-5 pay-btn btn-success' type="submit" disabled={!stripe}>
          Pay <FaMoneyCheck className='w-6'></FaMoneyCheck>
        </button>
      </form>
      {cardError&&<p className='text-red-500 ml-10'>{cardError}</p>}
        </>
    );
};

export default CheckOutForm;