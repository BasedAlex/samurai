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
	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>
				<div className={s.dialog}>
					<DialogItem name='Alex' id='1' />
					<DialogItem name='Dima' id='2' />
					<DialogItem name='Valera' id='3' />
					<DialogItem name='Jora' id='4' />
					<DialogItem name='Kirill' id='5' />
				</div>
			</div>
			<div className={s.messages}>
				<Message message='Hi!' />
				<Message message='How is your nothing?' />
				<Message message='Yo!' />
			</div>
		</div>
	)
}

export default Dialogs
