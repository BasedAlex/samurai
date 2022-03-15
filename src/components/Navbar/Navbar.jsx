import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const links = navData => (navData.isActive ? s.active : s.item)

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<NavLink to='/profile' className={links}>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink to='/dialogs' className={links}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users' className={links}>
					Users
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' className={links}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings' className={links}>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
