import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'

let mapStateToProps = state => {
	return {
		dialogPage: state.dialogPage,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		updateNewMessageBody: body => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

/*
const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogPage

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator())
				}

				let onNewMessageChange = body => {
					store.dispatch(updateNewMessageBodyCreator(body))
				}
				return (
					<Dialogs
						updateNewMessageBody={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogPage={state}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}
*/
