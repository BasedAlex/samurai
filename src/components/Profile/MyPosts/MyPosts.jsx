import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'
// import { addPost } from '../../../redux/state'

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

		props.dispatch(text, { type: 'ADD-POST' })
		props.dispatch('', { type: 'ADD-NEW-POST-TEXT' })
		// console.log(props.dispatch({ type: 'ADD-POST' }, newPost(text)))
		// props.updateNewPostText('') - обнуляет поле, до диспатча было
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
		// props.updateNewPostText(text) - было до диспатча
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
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
