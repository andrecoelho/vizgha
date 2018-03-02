import { combineReducers } from 'redux'
import {
  ADD_TOKEN,
  API_REPOS,
  ADD_REPOS,
  API_COMMITS,
  ADD_COMMITS
} from '../actions/types'

const token = (state = '', action) =>
  action.type === ADD_TOKEN ? action.token : state

const userName = (state = '', action) =>
  action.type === API_REPOS ? action.userName : state

const reposLoading = (state, action) => action.type === API_REPOS
const commitsLoading = (state, action) => action.type === API_COMMITS

const repos = (state = [], action) => {
  switch (action.type) {
    case ADD_REPOS:
      return action.repos
    case ADD_COMMITS:
      if (state.length > 0) {
        return state.map(
          repo =>
            action.repoName === repo.name
              ? { ...repo, commits: action.commits }
              : repo
        )
      } else {
        return state
      }
    default:
      return state
  }
}

export default combineReducers({
  token,
  userName,
  repos,
  reposLoading,
  commitsLoading
})
