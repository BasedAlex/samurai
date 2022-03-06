import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = () => {
	let postData = [
		{ id: 1, message: 'Hi, how are you?', likes: 10 },
		{ id: 2, message: "It's my first post!", likes: 0 },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	]

	return (
		<div class={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post
					message={postData[0].message}
					likes={postData[0].likes}
					className={s.post}
				/>
				<Post
					message={postData[1].message}
					likes={postData[1].likes}
					className={s.post}
				/>
			</div>
		</div>
	)
}

export default MyPosts
