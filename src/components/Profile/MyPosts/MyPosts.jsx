import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = props => {
	// let posts = [
	// 	{ id: 1, message: 'Hi, how are you?', likes: 10 },
	// 	{ id: 2, message: "It's my first post!", likes: 0 },
	// ]

	let postsElements = props.posts.map(p => (
		<Post message={p.message} likes={p.likes} className={s.post} />
	))

	let newPostElement = React.createRef()

	let addPost = () => {
		let text = newPostElement.current.value
		alert(text)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
