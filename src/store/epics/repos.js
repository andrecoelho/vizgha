import _ from 'lodash/fp'
import gqlRequest from './_gql-request'

import { API_REPOS } from '../actions/types'
import { addRepos } from '../actions/creators'

const reposQuery = userName => `
  user(login: "${userName}") {
    repositories(first: 100) {
      totalCount
      edges {
        node {
          id
          name
          description
          url
          forkCount
          stargazers {
            totalCount
          }
          issues {
            totalCount
          }
          languages(first: 100) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`

const extractRepoInformation = _.compose(
  addRepos,
  _.sortBy(_.path('name')),
  _.map(_.path('node')),
  _.map(_.pick(['node.id', 'node.name'])),
  _.path('response.data.user.repositories.edges')
)

const repos = (actionStream, store) =>
  actionStream
    .ofType(API_REPOS)
    .switchMap(action =>
      gqlRequest(store.getState().token, reposQuery(action.userName)).map(
        extractRepoInformation
      )
    )

export default repos
