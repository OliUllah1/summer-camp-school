
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClasseCard = ({classe}) => {

    const {availableSets,classImg,className,instructorName,price,_id}=classe;
    const {user}= useAuth()
    const navigate=useNavigate()
    const handleSaveClass=()=>{
        if(user){
            const saveCard={classImg,className,instructorName,price,email:user.email,_id}
            fetch('https://summer-camp-school-server-mu.vercel.app/saveclass',{
                method:'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(saveCard)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class save Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      setSave(true)
                }
                else{
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Already save this class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                console.log(data)})
        }
        else{
            navigate('/login')
        } 
    }
    
    return (
        <div className="rounded-tl-3xl rounded-br-3xl bg-base-100 shadow-2xl">
  <figure className="px-5 pt-10">
    <img src={classImg} alt="Shoes" className="rounded-xl w-full h-40" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#eb1551]">{className}</h2>
    <p className='font-semibold'><span className='font-bold'>Instructor</span> : {instructorName}</p>
    <p className='font-semibold'><span className='font-bold'>Available seats</span> : {availableSets}</p>
    <p className='font-semibold'><span className='font-bold'>Price</span> : {price} $</p>
    {
        availableSets===0?<button disabled={true} className='red-btn mt-3'>Not Available</button>:<button onClick={handleSaveClass} className='primary-btn mt-3'>Save Class</button>
    }
    
  </div>
</div>
    );
};

export default ClasseCard;