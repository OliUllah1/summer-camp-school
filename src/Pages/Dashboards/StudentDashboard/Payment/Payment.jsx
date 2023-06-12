import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
// // TODO
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
    const {id}=useParams()
    const classId= id.substring(1)
    console.log(classId)
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = {}, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/saveclass/${classId}`)
        return res.data;
    })
    const{className,price}=classData;
    return (
        <div className='text-[#eb1551] bg-gray-300 w-[100%] h-[100%]'>
            <h1 className='m-10 text-4xl font-semibold'>payment Now</h1>
            <div className='flex gap-10 ml-10 font-semibold'>
                <p>Class Name: {className}</p>
                <p>price : {price}</p>
            </div>
            <Elements stripe={stripePromise} >
                <CheckOutForm price={price} classData={classData}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;