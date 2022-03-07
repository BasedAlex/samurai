import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let posts = [
	{ id: 1, message: 'Hi, how are you?', likes: 10 },
	{ id: 2, message: "It's my first post!", likes: 0 },
]

let dialogs = [
	{ id: 1, name: 'Alex' },
	{ id: 2, name: 'Dima' },
	{ id: 3, name: 'Valera' },
	{ id: 4, name: 'Jora' },
	{ id: 5, name: 'Kirill' },
]

let messages = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your nothing?' },
	{ id: 3, message: 'Yo' },
	{ id: 4, message: 'Yo' },
	{ id: 5, message: 'Yo' },
]

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
