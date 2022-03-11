import React from 'react'
// import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
	let state = props.store.getState().dialogPage

	const { dialogs } = props
	/*
	let dialogElements = state.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesElements = props.state.item.map(m => (
		<Message message={m.item} />
	))
	<div className={s.messages}>{messagesElements}</div>
*/
	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>
				{dialogs.dialogs.map(d => {
					return <DialogItem name={d.name} id={d.id} />
				})}
				<Message items={dialogs.items} />
			</div>
		</div>
	)
}

export default Dialogs
