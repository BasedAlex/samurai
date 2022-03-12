// import { rerenderEntireTree } from '../render'

import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likes: 10 },
				{ id: 2, message: "It's my first post!", likes: 0 },
			],
			newPostText: '',
		},
		dialogPage: {
			items: [
				{ id: 1, user: 'Alex', message: 'Hi', side: 'main' },
				{ id: 2, user: 'Alex', message: 'How is your nothing?', side: 'main' },
				{ id: 3, user: 'Alex', message: 'Yo', side: 'main' },
				{ id: 4, user: 'Alex', message: 'Yo', side: 'guest' },
				{ id: 5, user: 'Alex', message: 'Fine thank you! hbu?', side: 'guest' },
			],
			dialogs: [
				{ id: 1, name: 'Alex' },
				{ id: 2, name: 'Dima' },
				{ id: 3, name: 'Valera' },
				{ id: 4, name: 'Jora' },
				{ id: 5, name: 'Kirill' },
			],
			newMessageBody: '',
		},
		sidebar: {},
	},

	getState() {
		return this._state
	},

	_callSubscriber() {
		console.log('State is changed')
	},
	/*
	addPost(postMessage) {
		let newPost = {
			id: 5,
			message: postMessage,
			likesCount: 0,
		}
		this._state.profilePage.posts.push(newPost)
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	}, */

	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	},
}

window.store = store
export default store
