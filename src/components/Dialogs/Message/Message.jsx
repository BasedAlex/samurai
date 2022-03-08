import React from 'react'
// import state from '../../redux/state'
// import s from './../Dialogs.module.css'
import './Message.module.css'

let newMessage = React.createRef()

let addMessage = () => {
	let text = newMessage.current.value
	alert(text)
}

const Message = props => {

	let messageArray;
	if (typeof props.message === 'object') {
		messageArray = props.message.map(m => {

			return (
				<div className={`dialogs__${m.side}`}>
					<span className="dialogs__name">{m.user}</span>
					<span>{m.message}</span>
				</div>
			)
		})
		console.log(messageArray)
	} return (
		<div>
			<div className="dialog__message">{props.message}</div>
			<div className="dialogs__message">
			{messageArray}
			<div>
				<textarea ref={newMessage}></textarea>
				<div>
					<button onClick={addMessage}>
							Send
					</button>
				</div>
			</div>
			</div>
		</div>
)}
	// // return (
		// 	// // 	<div>
		// 	// // 		<div className=> {props.message}</div>
		// 	// // 		<div>
		// 	// // 			<textarea ref={newMessage} ></textarea>
		// 	// // 			<div>
		// 	// // 				<button onClick={addMessage}>
		// 	// // 					Отправить
		// 	// // 				</button>
		// 	// // 			</div>
		// 	// // 		</div>
		// 	// //
		// 	// // 	</div>
		// 	// )

//
// name="new-message" cols="30" rows="10"

// console.log(state)
export default Message
// {s.dialogs} className={`owner ${'main' ? 'active' : ''}`}
