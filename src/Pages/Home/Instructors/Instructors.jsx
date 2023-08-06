
import InstructorCard from './InstructorCard';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    console.log(instructors)
    return (
        <div className='pt-20 px-2 lg:px-10'>
            <div className='grid grid-cols-4 py-10 gap-5'>
            {
                instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructors;