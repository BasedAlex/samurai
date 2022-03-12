const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state
		case SEND_MESSAGE:
			let body = state.newMessageBody
			state.newMessageBody = ''
			state.items.push({
				id: 6,
				user: 'Alex',
				message: body,
				side: 'main',
			})
			return state
		default:
			return state
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
})

export default dialogsReducer
