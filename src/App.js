import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/DIalogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

// import Profile from './components/Profile/Profile'

const App = props => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div class='app-wrapper-content'>
				{/* <Profile /> */}
				<Dialogs />
			</div>
		</div>
	)
}

export default App
