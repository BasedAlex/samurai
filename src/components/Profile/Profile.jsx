import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div>
			<div>
				<img
					className={s.profile__image}
					src='https://i.pinimg.com/originals/0b/7c/fd/0b7cfdaa80abeb33b06e1d59e12c1245.jpg'
					alt='альтернативный текст'
				/>
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	)
}

export default Profile
