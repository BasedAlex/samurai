import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = () => {
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
				<Post message='Hi, how are you?' likes='10' className={s.post} />
				<Post message="It's my first post!" likes='0' className={s.post} />
			</div>
		</div>
	)
}

export default MyPosts
