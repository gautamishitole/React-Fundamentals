import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import React, { useState, useEffect } from 'react';
import CreateCourse from '../createCourse/createCourse';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setCourses, fetchCourses} from "../../redux/actions/courseActions";
import {setAuthors, fetchAuthors} from "../../redux/actions/authorActions";
function CourseInfo() {

	const courses = useSelector((state) => state.allCourses.courses);
	const authors = useSelector((state) => state.allAuthors.authors);
    const dispatch = useDispatch();

    // const fetchCourses= async () => {
    //     const response = await axios.get("http://localhost:4000/courses/all").catch((error) => {
    //         console.log(error);
    // });

	

    // dispatch(setCourses(response.data.result));
    // console.log(response.data.result);
    // };

	// const fetchAuthors= async () => {
    //     const authorResponse = await axios.get("http://localhost:4000/authors/all").catch((error) => {
    //         console.log(error);
    // });
	// dispatch(setAuthors(authorResponse.data.result));
    // console.log(authorResponse.data.result);
	
	// }
	
	useEffect(() => {       
			dispatch(fetchCourses());
			dispatch(fetchAuthors());
    },[]);
   


    const [addNewCourseSection, toggleClick] = useState(false);
	// const [AuthorsList, updateAuthorsList] = authors;
	// const [CoursesList, updateCoursesList] = courses;
	
    // function setAuthorList(val) {
	// 	updateAuthorsList((oldArray) => [val, ...oldArray]);
	// }

	// function setCourseList(val) {
	// 	updateCoursesList((oldArray) => [val, ...oldArray]);
	// }

	function toggleCourseSection() {
		if (addNewCourseSection) {
			return (
				<CreateCourse
					authorList={[...authors]}
					courseList={[...courses]}
					// setAuthorsList={(e) => setAuthorList(e)}
					addNewCourseClick={() => toggleClick(false)}
					// setCourseList={(e) => setCourseList(e)}
				></CreateCourse>
			);
		} else {
			return (
				<Courses
					courseList={courses}
					authorList={authors}
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
			{/* <Body></Body> */}
		</div>
	);

}
export default CourseInfo;