import React, { Component, } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
import store from './Store'
import { getInputChangeAction, addTodoItemAction, deleteTodoItemAction, addTodoListAction , getTodoListAction } from './Store/Actions/TodoList'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleLiClick = this.handleLiClick.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		store.subscribe(this.handleStoreChange)
	}

	componentDidMount() {
		/*axios.get('api/todoList')
				 .then((res) => {
			 			const action = addTodoListAction(res.data)
			 			store.dispatch(action)
				 })*/
		const action = getTodoListAction()
		store.dispatch(action)
	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleLiClick={this.handleLiClick}
			/>
		)
	}

	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleBtnClick(e) {
		const action = addTodoItemAction()
		store.dispatch(action)
	}

	handleLiClick(index){
		const action = deleteTodoItemAction(index)
		store.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
	}
}

export default TodoList
