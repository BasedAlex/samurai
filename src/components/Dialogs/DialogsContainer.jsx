import React from 'react'
// import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialogs from './Dialogs'

import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'

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

export default DialogsContainer
