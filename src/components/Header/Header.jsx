import { Button } from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import titleLogo from '../../assets/course-react.png';

function Header() {
	return (
		<header className='pb-3 header'>
			<div className='d-flex justify-content-between align-items-center p-3 border border-danger rounded'>
				<div>
					<Logo imgSrc={titleLogo} height='50px' />
				</div>
				<div className='d-flex align-items-center'>
					<span className='pe-5'>Dave</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
