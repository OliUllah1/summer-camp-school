import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const FeedbackModal = ({closeModal, isOpen, feedbackInformation ,refetch}) => {
  console.log('feedback',feedbackInformation)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const feedbackData={feedback:data.feedback}
        const token = localStorage.getItem('access-token');
        
        fetch(`https://summer-camp-school-server-mu.vercel.app/classfeedback/${feedbackInformation._id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json',
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(feedbackData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){ 
              refetch()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Feedback send Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            }
            
            reset()
        })
        };

    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-[#eb1551]  font-medium leading-6"
                  >
                    Class Feedback
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                  <textarea  {...register("feedback", { required: true })}  className="textarea mt-5 w-full textarea-secondary" placeholder="write your feedback"></textarea>
                  {errors.feedback && <p className='my-3 text-red-500'>This field is required</p>}
                  
                    <input
                      type="submit"
                      value='Send Feedback'
                      className="primary-btn"
                    >
                    </input>
               
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      )
    }

export default FeedbackModal;