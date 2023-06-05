import { Link } from 'react-router-dom';
import RouterGuard from './route-guard';

const Home = () => {
	return (
		<div>
			<h1>This is a home page</h1>
			<Link to='/login'>
				<button type='button'>Login</button>
			</Link>
		</div>
	);
};

export default Home;
