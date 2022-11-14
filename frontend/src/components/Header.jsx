import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
			<div class='container'>
				<a
					class='navbar-brand'
					href='#'>
					Navbar
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div
					class='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<div className='navbar-nav me-auto mb-2 mb-lg-0'></div>
					<ul className='navbar-nav text-white  gap-3'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/login'>LogIn</NavLink>
						</li>
						<li className='nav-item'>
							{' '}
							<NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
