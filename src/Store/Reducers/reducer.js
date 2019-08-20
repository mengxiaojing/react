import { CHANGE_INPUT_VALUE, ADD_TODOLIST_ITEM, DELETE_TODOLIST_ITEM } from '../Actions/TodoList/instance'

const defaultState = {
	inputValue: '',
	list: [32]
}

export default (state = defaultState, action)=>{
	if(action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value
		return newState
	}
	if(action.type === ADD_TODOLIST_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if(action.type === DELETE_TODOLIST_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState
	}
	return state
}