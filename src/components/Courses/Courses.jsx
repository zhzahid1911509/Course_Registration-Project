
import { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = ({handleAddCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
      },[])

    return (
        <div className="flex flex-col md:w-2/3 md:grid md:grid-cols-3 gap-4 my-5">
            
            {
                courses.map(
                    course => <Course
                    key={course.id}
                    course={course}
                    handleAddCourse={handleAddCourse}>
                    </Course>
                )
            }
        </div>
    );
};

Courses.propTypes = {

}

export default Courses;