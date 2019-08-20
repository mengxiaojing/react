import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import axios from 'axios'

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputVal: '<h1>332<h1>',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}

	componentDidMount() {
		axios.get('api/todoList')
				 .then((res) => {
				 		this.setState(() => ({
				 			list:[...res.data]
				 		}))
				 })
	}

	render() {
		return (
			<Fragment>
				<div>
					输入内容
					<input
						value={this.state.inputVal}
						onChange={this.handleInputChange}
					/>
					<button
						id='btn'
						onClick={this.handleBtnClick}
					>submit</button>
				</div>
				<ul>{this.initGetItem()}</ul>
			</Fragment>
		)
	}

	initGetItem() {
		return this.state.list.map((item, index)=>{
							return (
								<Fragment
										key={index}>
									<TodoItem
										content={item}
										index={index}
										deleteItem={this.handleItemDelete}
										dangerouslySetInnerHTML={{__html: item}}
									/>
									{/*<li
										key={index}
										onClick={this.handleLiClick.bind(this,index)}
										dangerouslySetInnerHTML={{__html: item}}
									></li>*/}
								</Fragment>
							)
						})
	}

	handleInputChange(e) {
		const val = e.target.value
		this.setState(() => ({
			inputVal: val
		}))
		/*this.setState({
			inputVal: e.target.value
		})*/
	}

	handleBtnClick(e) {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputVal],
			inputVal: ''
		}))
		/*this.setState({
			list: [...this.state.list, this.state.inputVal],
			inputVal: ''
		})*/
	}

	handleLiClick(index){
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list: list
		})
	}

	handleItemDelete(index){
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index,1)
			return {list}
		})
		/*const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list: list
		})*/
	}
}

export default TodoList
