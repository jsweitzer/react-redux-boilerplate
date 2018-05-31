import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import postReducer from './postReducer'

export default combineReducers({
  todos,
  visibilityFilter,
  posts: postReducer
})