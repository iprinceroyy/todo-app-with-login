import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom';

import Home from './routes/home';
import Login from './routes/login';
import Dashboard from './routes/dashboard';

import './App.css';

const router = createBrowserRouter([
	{
		path: '*',
		Component: Root,
	},
]);

export default function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

const hasJWT = () => (localStorage.getItem('token') ? true : false);

function Root() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={hasJWT() ? <Dashboard /> : <div>opps</div>} />
		</Routes>
	);
}
