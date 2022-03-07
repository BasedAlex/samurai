let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likes: 10 },
			{ id: 2, message: "It's my first post!", likes: 0 },
		],
	},
	dialogPage: {
		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How is your nothing?' },
			{ id: 3, message: 'Yo' },
			{ id: 4, message: 'Yo' },
			{ id: 5, message: 'Yo' },
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
