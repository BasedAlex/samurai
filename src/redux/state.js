let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likes: 10 },
			{ id: 2, message: "It's my first post!", likes: 0 },
		],
	},
	dialogPage: {
		messages: [
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

export default state
