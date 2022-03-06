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
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = props => {
	let dialogsData = [
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Dima' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Jora' },
		{ id: 5, name: 'Kirill' },
	]

	let messagesData = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your nothing?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>
				<div className={s.dialog}>
					<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
					<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
					<DialogItem name='Valera' id='3' />
					<DialogItem name='Jora' id='4' />
					<DialogItem name='Kirill' id='5' />
				</div>
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
			</div>
		</div>
	)
}

export default Dialogs
