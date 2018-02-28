import { ADD_TOKEN, ADD_REPOS, ADD_COMMITS } from './types'

export const addToken = token => ({
  type: ADD_TOKEN,
  token
})

export const addRepos = repos => ({
  type: ADD_REPOS,
  repos
})

export const addCommits = commits => ({
  type: ADD_COMMITS,
  commits
})
