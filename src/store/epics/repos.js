import { Observable } from 'rxjs/Observable'
import _ from 'lodash/fp'
import gqlRequest from './_gql-request'

import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/catch'

import { API_REPOS } from '../actions/types'
import { addRepos } from '../actions/creators'

const reposQuery = userName => `
  user(login: "${userName}") {
    repositories(first: 100) {
      totalCount
      edges {
        node {
          name
          description
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
  _.map(repo =>
    _.merge(
      {
        starCount: _.path('node.stargazers.totalCount', repo),
        issueCount: _.path('node.issues.totalCount', repo),
        languages: _.sortBy(
          _.identity,
          _.map(_.path('node.name'), _.path('node.languages.edges', repo))
        )
      },
      _.omit(['stargazers', 'issues', 'languages'], _.path('node', repo))
    )
  ),
  _.path('response.data.user.repositories.edges')
)

const repos = (actionStream, store) =>
  actionStream.ofType(API_REPOS).switchMap(action =>
    gqlRequest(store.getState().token, reposQuery(action.userName))
      .map(extractRepoInformation)
      .catch(() => Observable.empty())
  )

export default repos
