import { combineReducers } from 'redux'

import items from './items'
import visibilityFilter from './visibilityFilter'
import keyword from './keyword'

export default combineReducers({
  items,
  visibilityFilter,
  keyword
})
