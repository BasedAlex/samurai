import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

import UsersContainer from './components/Users/UsersContainer'

const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route
							path='/profile/*'
							element={
								<Profile

								// profilePage={props.state.profilePage}
								// dispatch={props.dispatch}
								/>
							}
						/>
						<Route path='/users/*' element={<UsersContainer />} />
						{/* <Route path='/dialogs/*' element={<Dialogs />}></Route>
						<Route path='/profile/*' element={<Profile />}></Route> 
						 dialogs={props.state.dialogPage}
						*/}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
