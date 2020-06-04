import React from 'react';
import PropTypes from 'prop-types';

const Card = ({course}) => {
  return (
    <div className='card'>
      <img src={course.img.src} className='card-img-top' alt={course.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`#${course.id} - ${course.code} (${course.semester})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Class name: ${course.name}`}</li>
        <li className='list-group-item'>{`Instructor: ${course.instructor}, ${course.email}`}</li>
        <li className='list-group-item'>{`Students enrolled: ${course.enrolled}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default Card;
