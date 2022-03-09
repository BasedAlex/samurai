// import { rerenderEntireTree } from '../render'

import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireTree = () => {
	console.log('State is changed')
}

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likes: 10 },
			{ id: 2, message: "It's my first post!", likes: 0 },
		],
		newPostText: '',
	},
	dialogPage: {
		items: [
			{ user: 'Alex', message: 'Hi', side: 'main' },
			{ user: 'Alex', message: 'How is your nothing?', side: 'main' },
			{ user: 'Alex', message: 'Yo', side: 'main' },
			{ user: 'Alex', message: 'Yo', side: 'guest' },
			{ user: 'Alex', message: 'Fine thank you! hbu?', side: 'guest' },
		],
		dialogs: [
			{ id: 1, name: 'Alex' },
			{ id: 2, name: 'Dima' },
			{ id: 3, name: 'Valera' },
			{ id: 4, name: 'Jora' },
			{ id: 5, name: 'Kirill' },
		],
	},
}

window.state = state

export const addPost = postMessage => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}

export const updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer
}

export default state
