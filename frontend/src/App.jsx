import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'


// javascript 


const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='header'
					element={<Header />}
				/>

				<Route
					path='signup'
					element={<Signup />}
				/>
			</Routes>
		</div>
	)
}

export default App
