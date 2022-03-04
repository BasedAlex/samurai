import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='#' />
			</div>
			<div>ava + description</div>
			<div>
				My posts
				<div>New posts</div>
				<div className={s.posts}>
					<div classname={s.post}>Post 1</div>
					<div classname={s.post}>Post 2</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
