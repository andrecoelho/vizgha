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

export const apiCommits = (userName, repoName) => ({
  type: API_COMMITS,
  userName,
  repoName
})

export const addCommits = commits => ({
  type: ADD_COMMITS,
  commits
})
