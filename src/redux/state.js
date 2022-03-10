// import { rerenderEntireTree } from '../render'
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
	},

	getState() {
		return this._state
	},

	_callSubscriber() {
		console.log('State is changed')
	},
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
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},
}

window.store = store
export default store
