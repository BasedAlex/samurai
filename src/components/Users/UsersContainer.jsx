import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setIsFetching,
	setTotalUsersCount,
	setUsers,
	unfollow,
} from '../../redux/users-reducer'
// import UsersAPIComponent from './UsersAPIComponent.jsx'
import * as axios from 'axios'
import Users from './Users'

import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChange = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.setIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChange={this.onPageChange}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.userPage.users,
		pageSize: state.userPage.pageSize,
		totalUsersCount: state.userPage.totalUsersCount,
		currentPage: state.userPage.currentPage,
		isFetching: state.userPage.isFetching,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setIsFetching,
})(UsersContainer)
