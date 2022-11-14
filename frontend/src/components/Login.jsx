import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [info, setInfo] = useState('')
	const navigate = useNavigate()
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})
	console.log(info)
	const fetchData = async () => {
		const res = await axios
			.post('http://localhost:5000/api/login', {
				email: inputs.email,
				password: inputs.password,
			})
			.then((res) => {
				navigate('/header')
				// console.log(res.data.user)
				setInfo(res.data.user)
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
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
