import React, { Component, Fragment } from 'react'
//import store from './Store'
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_TODOLIST_ITEM, DELETE_TODOLIST_ITEM } from './Store/Actions/TodoList/instance'

const TodoList = (props) => {

	const { inputValue, handleBtnClick, handleInputChange, list, deleteTodoListItem } = props

	return (
		<Fragment>
			<div>
				<input 
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button onClick={handleBtnClick}>提交</button>
			</div>
			<ul>
				{
					list.map((item,index) => {
						return <li key={index} onClick={()=>{deleteTodoListItem(index)}}>{item}</li>
					})
				}
			</ul>
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange(e){
			const action = {
				type: CHANGE_INPUT_VALUE,
				value: e.target.value
			}
			dispatch(action)
		},
		handleBtnClick(){
			const action = {
				type: ADD_TODOLIST_ITEM
			}
			dispatch(action)
		},
		deleteTodoListItem(index){
			const action = {
				type: DELETE_TODOLIST_ITEM,
				index
			}
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
