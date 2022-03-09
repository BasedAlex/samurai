import { rerenderEntireTree } from '../render'

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

export let addPost = postMessage => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}

export let updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export default state
