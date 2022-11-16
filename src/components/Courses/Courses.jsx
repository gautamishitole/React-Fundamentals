import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import {useSelector} from "react-redux";

import React, { useState } from 'react';

function Courses({ courseList, authorList, addNewCourseClick }) {
	const courses = useSelector((state) => state.allCourses.courses);
	const authors = useSelector((state) => state.allAuthors.authors);

	const [filtererdList, searchCourseListList] = useState(courses);

	function filterList(val) {
		if (!val) {
			searchCourseListList(courseList);
		} else {
			let newList = courseList.filter(
				(x) =>
					x.title.toLowerCase().includes(val.toLowerCase()) ||
					x.id.toLowerCase().includes(val.toLowerCase())
			);
			searchCourseListList(newList);
		}
	}

	const renderCourses = 
			
				<div className='p-3'>
					<div className='search-add-section pb-3'>
						<SearchBar
							click={addNewCourseClick}
							filterList={(e) => filterList(e)}
						></SearchBar>
					</div>
					<div className='card-section'>
						{courses.map((x) => {
							const course = x;
							return (
								<CourseCard></CourseCard>
							);
						 })}
					</div>
				</div>
		

	return (
		<>{renderCourses}</>
	);
}

export default Courses;
