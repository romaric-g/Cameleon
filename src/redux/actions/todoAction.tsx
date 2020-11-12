import * as types from '../constants'

export const addTodo = (text: string, cat = 'default') => ({
	type: types.ADD_TODO,
	text,
	cat,
})
export const editTodoCat = (id: string, cat: string) => ({
	type: types.EDIT_TODO_CAT,
	id,
	cat
})
export const setVisibilityFilter = (filter: string) => ({
	type: types.SET_VISIBILITY_FILTER,
	filter
})