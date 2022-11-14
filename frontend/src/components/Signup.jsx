import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
	const navigate = useNavigate()
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
	})
	const fetchData = async () => {
		const res = await axios
			.post('http://localhost:5000/api/signup', {
				name: inputs.name,
				email: inputs.email,
				password: inputs.password,
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetchData()
	}
	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
		// console.log(inputs)
	}

	return (
		<div className='shadow-lg w-50 mx-auto mt-5 p-5 rounded-2'>
			<form
				onSubmit={handleSubmit}
				className=''>
				<div class='mb-4'>
					<label
						for='exampleFormControlInput1'
						class='form-label'>
						Name
					</label>
					<input
						type='text'
						class='form-control'
						id='exampleFormControlInput1'
						placeholder='Enter your Name'
						name='name'
						value={inputs.name}
						onChange={handleChange}
					/>
				</div>
				<div class='mb-4'>
					<label
						for='exampleFormControlInput1'
						class='form-label'>
						Email
					</label>
					<input
						type='email'
						class='form-control'
						id='exampleFormControlInput1'
						placeholder='name@example.com'
						name='email'
						value={inputs.email}
						onChange={handleChange}
					/>
				</div>
				<div class='mb-4'>
					<label
						for='exampleFormControlInput1'
						class='form-label'>
						Password
					</label>
					<input
						type='password'
						class='form-control'
						id='exampleFormControlInput1'
						placeholder='Enter Your Password'
						name='password'
						value={inputs.password}
						onChange={handleChange}
					/>
				</div>

				<div class='mb-4 mx-auto'>
					<button
						className='btn w-100 btn-dark'
						type='submit'>
						SignUp
					</button>
				</div>
			</form>
		</div>
	)
}

export default Signup
