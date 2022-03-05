import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>
				<div className={s.dialog + ' ' + s.active}>Alex</div>
				<div className={s.dialog}>Dima</div>
				<div className={s.dialog}>Valera</div>
				<div className={s.dialog}>Jora</div>
				<div className={s.dialog}>Kirill</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How is your nothing?</div>
				<div className={s.message}>YO</div>
			</div>
		</div>
	)
}

export default Dialogs
