import { ADD_REPOS, ADD_COMMITS } from 'store/actions/types'

export const addRepos = repos => ({
  type: ADD_REPOS,
  payload: repos
})

export const addCommits = commits => ({
  type: ADD_COMMITS,
  payload: commits
})
