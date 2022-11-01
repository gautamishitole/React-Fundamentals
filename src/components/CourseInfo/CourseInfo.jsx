import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import React, { useState } from 'react';
import CreateCourse from '../createCourse/createCourse';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

function CourseInfo() {
    const [addNewCourseSection, toggleClick] = useState(false);
	const [AuthorsList, updateAuthorsList] = useState(mockedAuthorsList);
	const [CoursesList, updateCoursesList] = useState(mockedCoursesList);
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
			{/* <Body></Body> */}
		</div>
	);

}
export default CourseInfo;