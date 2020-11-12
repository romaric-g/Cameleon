import { SET_VISIBILITY_FILTER } from '../constants'
import { SHOW_ALL } from '../constants'

const visibilityFilter = (state = SHOW_ALL, action: any) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter