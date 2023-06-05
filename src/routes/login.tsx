import { useState } from 'react';

const Login = (): JSX.Element => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Send the form data to the server
		fetch('http://localhost:3000/submit', {
			method: 'POST',
			body: JSON.stringify(formData),
		})
			.then(response => response.json())
			.then(data => {
				// Handle the response from the server
				console.log(data.token);
				localStorage.setItem('token', data.token);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<h1>This is a login page</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' name='email' value={formData.email} onChange={handleChange} />
				<br />
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					id='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
				/>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
