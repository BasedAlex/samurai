let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likes: 10 },
			{ id: 2, message: "It's my first post!", likes: 0 },
		],
	},
	dialogPage: {
		messages: [
			{ id: 1, message: 'Hi', owner: 'main' },
			{ id: 2, message: 'How is your nothing?', owner: 'main' },
			{ id: 3, message: 'Yo', owner: 'main' },
			{ id: 4, message: 'Yo', owner: 'guest' },
			{ id: 5, message: 'Fine thank you! hbu?', owner: 'guest' },
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

export default state
