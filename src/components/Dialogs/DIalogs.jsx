import React from 'react'
// import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
	console.log(props)
	let dialogElements = props.state.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesElements = props.state.messages.map(m => (
		<Message message={m.message} owner={m.owner} />
	))

	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>{dialogElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	)
}

export default Dialogs
