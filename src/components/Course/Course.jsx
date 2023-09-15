
import PropTypes from 'prop-types';
const Course = ({course, handleAddCourse}) => {
    
    const {cover_img, title, description, price, credit_hour} = course;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-fit h-[200px]"><img className='rounded-lg' src={cover_img} alt="Courses_Cover_Image" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
                <div className='flex flex-row text-xl gap-2'>
                    <p className='flex items-center gap-2'><svg className="feather feather-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>Price: {price}</p>
                    <p className='flex items-center gap-2'><svg className="feather feather-book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Credit: {credit_hour} hr</p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddCourse(course, credit_hour, price)} className="btn bg-[#2F80ED] text-white w-full hover:text-black">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func.isRequired
}

export default Course;