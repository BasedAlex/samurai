import React from 'react'
import s from './Header.module.css'

const Header = () => {
	return (
		<header className={s.header}>
			<img
				src='https://infobiscuit.com/wp-content/uploads/2020/09/%D0%BA%D0%BF%D0%BE%D0%BF-%D1%8D%D1%80%D1%8B-dreamcatcher-%D0%B4%D0%B5%D0%B1%D1%8E%D1%82-%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D0%BB%D0%B8%D0%BF%D1%8B.jpg'
				alt='альтернативный текст'
			/>
		</header>
	)
}

export default Header
