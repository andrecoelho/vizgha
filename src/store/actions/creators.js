import {
  ADD_TOKEN,
  API_REPOS,
  ADD_REPOS,
  API_COMMITS,
  ADD_COMMITS
} from './types'

export const addToken = token => ({
  type: ADD_TOKEN,
  token
})

export const apiRepos = userName => ({
  type: API_REPOS,
  userName
})

export const addRepos = repos => ({
  type: ADD_REPOS,
  repos
})

export const apiCommits = (repoName) => ({
  type: API_COMMITS,
  repoName
})

export const addCommits = (repoName, commits) => ({
  type: ADD_COMMITS,
  repoName,
  commits
})
