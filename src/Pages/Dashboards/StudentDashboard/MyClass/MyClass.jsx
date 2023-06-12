import React from 'react';
import { FaMoneyCheck,FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
const MyClass = ({singleClass,index,refetch}) => {
    const {user}=useAuth()
    const {classImg,className,instructorName,instructorEmail,price,_id}=singleClass;
    const id=_id;
    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('ok')
                fetch(`http://localhost:5000/saveclass/${id}?email=${user.email}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                      refetch()
                        Swal.fire(
                            'Deleted!',
                            'class delete successfully',
                            'success'
                        )
                    }
                })
            //   
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
                <img src={classImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-[#eb1551]">{className}</div>
            </div>
          </div>
        </td>
        <td>
          <h4 className='font-semibold text-xl'>{instructorName}</h4>
          <p>{instructorEmail}</p>
        </td>
        <td className='font-semibold'>$ {price}</td>
        <td>
            <Link to={`/dashboard/:${id}`}><button className='flex items-center gap-2 pay-btn btn-success'>Pay <FaMoneyCheck className='w-6'></FaMoneyCheck></button></Link>
        </td>
        <td>
            <button onClick={()=>handleDelete(_id)} className="red-btn"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>
    );
};

export default MyClass;