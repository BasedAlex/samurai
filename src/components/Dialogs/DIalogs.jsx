import React from 'react'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
	// [

	// 	<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
	// 	<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
	// 	<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
	// 	<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
	// 	<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
	// ]

	let dialogElements = props.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesElements = props.messages.map(m => (
		<Message message={m.message} />
	))

	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>{dialogElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	)
}

export default Dialogs
