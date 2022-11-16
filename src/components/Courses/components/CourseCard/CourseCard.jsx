import Card from 'react-bootstrap/Card';
import Button from '../../../../common/Button/Button';
import '../../../../App.css';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import {useSelector} from "react-redux";

import React, { useState } from 'react';
import {
	useParams,useNavigate, Navigate
  } from "react-router-dom";

function CourseCard(prop) {
	
	const navigate = useNavigate();

	const courses = useSelector((state) => state.allCourses.courses);
	const authors = useSelector((state) => state.allAuthors.authors);

	function showCourse(title) {
		navigate('/courseInfo/:title');
	}

	const renderList = courses?.map((course) => {
		const {id, title, description} = course;
		return (
			<Card className='mb-2'>
			<Card.Body>
				<div className='d-flex'>
					<section className='course-info pe-3'>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</section>
					<aside className='course-details text-center ps-2'>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Authors:{' '}
							<span className='regular'>{authors && authors[0].name ? authors[0].name : 'Balakrishan'}</span>
						</label>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Duration:{' '}
							<span className='regular'>
								{authors && authors[0].id ? authors[0].id : '1234567890'}
							</span>
						</label>
						<label className='d-block bold text-start pb-2 text-truncate'>
							Created:{' '}
							<span className='regular'>{authors && authors[0].name ? authors[0].name : 'Balakrishan'}</span>
						</label>
						<Button
							name='Show Course'
							class='btn btn-info bg-transparent'
							click={() => showCourse(title)}
						></Button>
					</aside>
				</div>
			</Card.Body>
		</Card>
		);
	});

	return (
		<>{renderList}</>
	);
}

export default CourseCard;
