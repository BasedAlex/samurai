import React from 'react'
import styles from './users.module.css'

let Users = props => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: '',
				followed: false,
				fullName: 'Alex',
				status: 'The Good',
				location: { city: 'Saratov', country: 'Russia' },
			},
			{
				id: 2,
				photoUrl: '',
				followed: true,
				fullName: 'Dimas',
				status: 'The Bad',
				location: { city: 'Saratov', country: 'Russia' },
			},
			{
				id: 3,
				photoUrl: '',
				followed: false,
				fullName: 'Joras',
				status: 'The Ugly',
				location: { city: 'Rostov-on-Don', country: 'Russia' },
			},
		])
	}

	return (
		<div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={styles.userPhoto} alt='' />
						</div>
						<div>
							{' '}
							{u.followed ? (
								<button
									onClick={() => {
										props.follow(u.id)
									}}
								>
									Follow
								</button>
							) : (
								<button
									onClick={() => {
										props.unfollow(u.id)
									}}
								>
									Unfollow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
