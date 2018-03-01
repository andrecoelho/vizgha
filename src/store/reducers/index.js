import { combineReducers } from 'redux'
import { ADD_TOKEN, API_REPOS, ADD_REPOS, ADD_COMMITS } from '../actions/types'

const token = (state = '', action) =>
  action.type === ADD_TOKEN ? action.token : state

const userName = (state = '', action) =>
  action.type === API_REPOS ? action.userName : state

const repos = (state = [], action) =>
  action.type === ADD_REPOS ? action.repos : state

const commits = (state = [], action) =>
  action.type === ADD_COMMITS ? action.commits : state

export default combineReducers({
  token,
  userName,
  repos,
  commits
})
