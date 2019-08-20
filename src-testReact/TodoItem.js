import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

	constructor (props){
		super(props)
		this.handleLiClick = this.handleLiClick.bind(this)
	}

	shouldComponentUpdate(nextProps, nextStates) {
		if(nextProps.content !== this.this.props.content){
			return true
		}else{
			return false
		}
	}

	render (){
		return (
			<li
				onClick={this.handleLiClick}
			>{this.props.content}</li>
		)
	}

	handleLiClick() {
		const { deleteItem, index } = this.props
		deleteItem(index)
	}
}

TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	deleteItem: () =>{}
}

export default TodoItem