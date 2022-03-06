import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialog__items}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to='/dialogs/1'>Alex</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/2'>Dima</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/3'>Valera</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/4'>Jora</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/5'>Kirill</NavLink>
				</div>
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
