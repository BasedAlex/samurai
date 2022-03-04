import React from 'react'
import s from './Post.module.css'

const Post = props => {
	return (
		<div classname={s.item}>
			<img
				src='https://www.yesasia.ru/wp-content/uploads/2021/10/1634324989-untitled-1.jpg'
				alt='альтернативный текст'
			/>
			{props.message}
			<div>
				<span>♡ {props.likes} likes</span>
			</div>
		</div>
	)
}

export default Post
