import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import auth from './auth'

const rootReducer = combineReducers({
	todos,
	visibilityFilter,
	auth
})

export default rootReducer