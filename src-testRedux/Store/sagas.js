import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_TODO_LIST } from './Actions/TodoList/instance'
import { addTodoListAction } from './Actions/TodoList'
import axios from 'axios'

function* getInitList() {
	try{
		const res = yield axios.get('api/todoList')
		const action = addTodoListAction(res.data)
		yield put(action)
	}catch{
		console.log('请求失败')
	}
}
// generator 函数
function* mySaga() {
	yield takeEvery(GET_INIT_TODO_LIST, getInitList)
}

export default mySaga