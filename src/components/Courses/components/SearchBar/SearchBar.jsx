import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { Navigate, useNavigate } from "react-router-dom";

function SearchBar(prop) {
	const navigate = useNavigate();
	function onCreateCourseClick() {
		navigate('/createNewCourse');
	}

	const [courseName, setCourseName, setValue] = Input({
		class: 'form-control',
		placeholder: 'Enter Course Name..',
		name: 'coursename',
	});
	return (
		<div  data-testid='search-bar' className='d-flex justify-content-between align-items-center'>
			<div className='input-sec d-inline-flex align-items-center'>
				{/* <Input
					class='form-control'
					placeholder='Enter Course Name..'
					name='coursename'
				/> */}
				{setCourseName}
				<Button
					name='Search'
					class='btn btn-light ms-3'
					click={() => prop.filterList(courseName)}
				></Button>
			</div>
			<Button
				name='Add New Course'
				class='btn btn-info bg-transparent'
				click={() => onCreateCourseClick()}
			></Button>
		</div>
	);
}

export default SearchBar;
