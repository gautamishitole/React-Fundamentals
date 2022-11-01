import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/createCourse/createCourse';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
	/* const [addNewCourseSection, toggleClick] = useState(false);
	const [AuthorsList, updateAuthorsList] = useState(mockedAuthorsList);
	const [CoursesList, updateCoursesList] = useState(mockedCoursesList);

	// function toggleCourseSection() {
	// 	return (
	// 		<div className='border border-primary rounded'>
	// 			{
	// 				if(addNewCourseSection){
	// 				<CreateCourse authorList={mockedAuthorsList}></CreateCourse>} else
	// 				{
	// 					<div className='border border-primary rounded'>
	// 						<Courses
	// 							courseList={mockedCoursesList}
	// 							authorList={mockedAuthorsList}
	// 							addNewCourseClick={(addNewCourseSection = true)}
	// 						></Courses>
	// 					</div>
	// 				}
	// 			}
	// 		</div>
	// 	);
	// }

	function setAuthorList(val) {
		updateAuthorsList((oldArray) => [val, ...oldArray]);
	}

	function setCourseList(val) {
		updateCoursesList((oldArray) => [val, ...oldArray]);
	}

	function toggleCourseSection() {
		if (addNewCourseSection) {
			return (
				<CreateCourse
					authorList={[...AuthorsList]}
					courseList={[...CoursesList]}
					setAuthorsList={(e) => setAuthorList(e)}
					addNewCourseClick={() => toggleClick(false)}
					setCourseList={(e) => setCourseList(e)}
				></CreateCourse>
			);
		} else {
			return (
				<Courses
					courseList={[...CoursesList]}
					authorList={AuthorsList}
					addNewCourseClick={() => toggleClick(true)}
				></Courses>
			);
		}
	}

	return (
		<div className='container-fluid'>
			<Header></Header>
			<div className='border border-primary rounded'>
				{toggleCourseSection()}
			</div>
			{ */ /* <Body></Body> */ /* }
		</div>
	); */

	return (
		<div className='App'>
			<BrowserRouter>
				<nav>
					<h1>React Task-2</h1>
					<Link to='/logout'>Logout</Link>
					<Link to='/'>Login</Link>
					<Link to='/registration'>Registration</Link>
					<Link to='/courses'>Course Info</Link>
				</nav>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/logout' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/courses' element={<CourseInfo />} />
					<Route path='/createNewCourse' element={<CreateCourse />} />
					<Route path='/courseInfo/:title' element={<CourseDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
