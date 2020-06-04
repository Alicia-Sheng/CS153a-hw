import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import CourseList from './containers/CourseList';

import courseData from '../assets/data.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>COSI Courses</h1>
    <p>This is a list of Brandeis COSI courses</p>
    </div>

    <CourseList data={courseData} title="List of COSI Courses" />

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>CourseList</h1>
      </nav>

      <CardList data={courseData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
