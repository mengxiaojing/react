import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST, GET_INIT_TODO_LIST } from './instance'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const addTodoItemAction = () => ({
	type: ADD_TODO_ITEM,
})

export const deleteTodoItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})

export const addTodoListAction = (data) => ({
	type: INIT_TODO_LIST,
	data
})

export const getTodoListAction1 = () => { //redux-thunk
	return (dispatch) => {
		axios.get('api/todoList').then((res) => {
			const action = addTodoListAction(res.data)
			dispatch(action)
		})
	}
}

export const getTodoListAction = () => ({ //redux-thunk
	type: GET_INIT_TODO_LIST
})