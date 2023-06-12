import React from 'react';
import { FaGraduationCap,FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';

const UserInformation = ({user,index,refetch}) => {
  const token = localStorage.getItem('access-token');
    const {email,name,photoUrl,role,_id}=user;
    const handleMakeAdmin=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be make admin this users!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i do it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-school-server-mu.vercel.app/users/${id}?role=admin`,{
                    method:'PATCH',
                    headers:{
                      "Authorization":`Bearer ${token}`
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.modifiedCount===1){
                      refetch()
                        Swal.fire(
                            'Congratulation',
                            'Make Admin Successfully',
                            'success'
                          )
                    }
                })  
            }
          }) 
    }
    
    const handleMakeInstructor=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be make instructor this users!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i do it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://summer-camp-school-server-mu.vercel.app/users/${id}?role=instructor`,{
                    method:'PATCH',
                    headers:{
                      "Authorization":`Bearer ${token}`
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.modifiedCount===1){
                      refetch()
                        Swal.fire(
                            'Congratulation',
                            'Make instructor Successfully',
                            'success'
                          )
                    }
                })


            
            }
          })




        
    }

    return (
        <tr className='w-[100%]'>
        <th className='text-[#eb1551]'>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask  w-20 h-16 object-center rounded-lg">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-[#eb1551]"></div>
            </div>
          </div>
        </td>
        <td>
          <h4 className='font-semibold text-xl'>{name}</h4>
          <p className='font-semibold text-gray-600'>{email}</p>
          
        </td>
        <td className='font-semibold'>{role}</td>
        <td>
            <button onClick={()=>handleMakeAdmin(_id)} disabled={role==='admin'} className={role==='admin'?'make-btn':'make-secondary'}>Make Admin <FaUserShield></FaUserShield></button>
        </td>
        <td>
            <button onClick={()=>handleMakeInstructor(_id)} disabled={role==='instructor'} className={role==='instructor'?'make-btn':'make-secondary'}>Make Instructor <FaGraduationCap></FaGraduationCap></button>
            
        </td>
        
        
      </tr>
    );
};

export default UserInformation;