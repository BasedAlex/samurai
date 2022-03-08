import React from 'react'
// import state from '../../redux/state'
// import s from './../Dialogs.module.css'
import './Message.module.css'

const Message = props => {
	let mainOwner = () => {
		if (props.owner === 'main') return 'active'
	}
	console.log(mainOwner)
	// const [isOpen,]
	console.log(props)

	return <div className={mainOwner()}> {props.message}</div>
}
// console.log(state)
export default Message
// {s.dialogs} className={`owner ${'main' ? 'active' : ''}`}
