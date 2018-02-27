import _ from 'lodash/fp'
import gqlRequest from './_gql-request'

import { API_REPOS } from '../actions/types'
import { addRepos } from '../actions/creators'

const reposQuery = userName => `{
  user(login: "${userName}") {
    repositories(first: 100) {
      edges {
        node {
          name
        }
      }
    }
  }
}`

const extractRepoNames = _.compose(
  addRepos,
  _.sortBy(_.identity),
  _.map(_.path('node.name')),
  _.path('data.user.repositories.edges')
)

const repos = (actionStream, state) =>
  actionStream
    .ofType(API_REPOS)
    .switchMap(action =>
      gqlRequest(state.token, reposQuery(action.payload)).map(extractRepoNames)
    )

export default repos
