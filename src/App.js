import React from 'react'
import './App.css'

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img src='#' />
			</header>
			<nav className='nav'>
				<div>
					<a href='#'>Profile</a>
				</div>
				<div>
					<a href='#'>Messages</a>
				</div>
				<div>
					<a href='#'>News</a>
				</div>
				<div>
					<a href='#'>Music</a>
				</div>
				<div>
					<a href='#'>Settings</a>
				</div>
			</nav>
			<div className='content'>
				<div>
					<img src='#' />
				</div>
				<div>ava + description</div>
				<div>
					My posts
					<div>New posts</div>
					<div>
						<div>Post 1</div>
						<div>Post 2</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
