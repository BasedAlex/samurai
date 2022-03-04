import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post message='Hi, how are you?' likes='10' />
				<Post message="It's my first post!" likes='0' />
			</div>
		</div>
	)
}

export default MyPosts
