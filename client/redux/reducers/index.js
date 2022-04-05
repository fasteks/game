import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import table from './table'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    table
  })

export default createRootReducer
