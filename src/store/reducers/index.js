import { combineReducers } from 'redux'
import { ADD_TOKEN, ADD_REPOS, ADD_COMMITS } from '../actions/types'

const token = (state = null, action) =>
  action.type === ADD_TOKEN ? action.token : state

const repos = (state = null, action) =>
  action.type === ADD_REPOS ? action.repos : state

const commits = (state = null, action) =>
  action.type === ADD_COMMITS ? action.commits : state

export default combineReducers({
  token,
  repos,
  commits
})
