import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOutForm = ({price,classData}) => {
    const {classImg,className,instructorName,_id}=classData;
    const navigate = useNavigate()
    const currTime = new Date()
    const time =currTime.getFullYear() + '-' + (currTime.getMonth() + 1) + '-' + currTime.getDate() +' ' + currTime.getHours() + ':' + currTime.getMinutes() + ':' + currTime.getSeconds();
    const {user}=useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError,setCardError]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])

    const handleSubmit= async (event)=>{
      event.preventDefault();

      if (!stripe || !elements) {
          return
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
          return
      }

      const { error } = await stripe.createPaymentMethod({
          type: 'card',
          card
      })

      if (error) {
          console.log('error', error)
          setCardError(error.message);
      }
      else {
          setCardError('');
      }

      setProcessing(true)

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

      console.log('payment intent', paymentIntent)  
      
      setProcessing(false)
      if (paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id);
        const transactionId =paymentIntent.id;
        const paymentsData = {
          transactionId,
          classImg,
          className,
          userEmail:user.email,
          instructorName,
          price,
          time
        }
        fetch(`http://localhost:5000/payments?id=${_id}`,{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(paymentsData)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Congratulations Your Payments Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/dashboard/enrolled')
          }
          console.log(data)
        })
      } 

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
        <button className='flex items-center gap-2 mt-5 pay-btn btn-success' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay <FaMoneyCheck className='w-6'></FaMoneyCheck>
        </button>
      </form>
      {cardError&&<p className='text-red-500 ml-10'>{cardError}</p>}
        </>
    );
};

export default CheckOutForm