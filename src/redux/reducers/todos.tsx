import { ADD_TODO } from '../constants'

const todos = (state: any, action: any) => {
	switch (action.type) {
		case ADD_TODO :
			return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: action.text, cat: action.cat }
                ]
            }
		default:
			return state
	}
}

export default todos