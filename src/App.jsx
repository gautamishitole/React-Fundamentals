import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/createCourse/createCourse';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseDetails from './components/CourseDetails/CourseDetails';





function App() {
	const [loggedIn, setItems] = useState([false]);

	useEffect(() => {
	const loggedIn = localStorage.getItem('token');
		if (loggedIn && loggedIn.length > 0) {
		setItems(true);
		} else {
			setItems(false);
		}
	});

	return (
		<div className='App'>
			{/* <Router>
				<Header />
				<Routes>
				<Route path = "/"  element={<CourseListing />} />
				<Route path = "/course/:courseId" exact component={CourseDetails} />
				<Route> 404 not found </Route>
				</Routes>
			</Router> */}

		
				<nav>
					<h1>Redux</h1>
					<Link to='/logout'>Logout</Link>
					{!loggedIn ? <Link to='/'>Login</Link> : ''}
					{!loggedIn ? <Link to='/registration'>Registration</Link> : ''}
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
		</div>
	);
}

export default App;
