import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = props => {
	let path = '/dialogs/' + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = props => {
	let dialogs = [
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Dima' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Jora' },
		{ id: 5, name: 'Kirill' },
	]

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your nothing?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	]

	let dialogElements = dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesElements = messages.map(m => <Message message={m.message} />)

	// [
	// 	<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
	// 	<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
	// 	<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
	// 	<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
	// 	<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
	// ]

	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>{dialogElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	)
}

export default Dialogs
