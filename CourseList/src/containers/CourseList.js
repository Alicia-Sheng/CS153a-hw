import React from 'react';
import PropTypes from 'prop-types';


const  CourseList = ({data,title}) => {
  return (
   <>
     <h2> {title} </h2>
     <ul>
       {data.map(course => (
         <li key={course.id}>
           {course.code}: {course.name}, {course.instructor}
         </li>
       ))}
     </ul>
   </>
 );
}

CourseList.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default CourseList;
