import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img
					className={s.profile__image}
					src='https://i.pinimg.com/originals/0b/7c/fd/0b7cfdaa80abeb33b06e1d59e12c1245.jpg'
					alt='альтернативный текст'
				/>
			</div>
			<div className={s.desc}>
				<img src={props.profile.photos.large} alt='' />
				<br />

				<ul>
					{props.profile.aboutMe}
					<li>
						i'm currently{' '}
						{props.profile.lookingForAJob
							? 'looking for job!'
							: 'not looking for job...'}{' '}
					</li>
					<li>{props.profile.lookingForAJobDescription}</li>
				</ul>
				<ul>
					Contact me on:
					<li>{props.profile.contacts.github}</li>
					<li>{props.profile.contacts.vk}</li>
					{props.profile.contacts.youtube ? (
						<li>props.profile.contacts.youtube</li>
					) : (
						''
					)}
					{props.profile.contacts.mainLink ? (
						<li>props.profile.contacts.mainLink</li>
					) : (
						''
					)}
				</ul>
			</div>
		</div>
	)
}

export default ProfileInfo
