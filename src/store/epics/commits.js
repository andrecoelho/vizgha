import { Observable } from 'rxjs/Observable'
import _ from 'lodash/fp'
import gqlRequest from './_gql-request'

import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/catch'

import { API_COMMITS } from '../actions/types'
import { addCommits } from '../actions/creators'

const commitsQuery = (userName, repoName) => `
  repository(owner: "${userName}", name: "${repoName}") {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 100) {
            totalCount
            nodes {
              oid
              author {
                name
              }
              message
              committedDate
              authoredDate
              additions
              deletions
            }
          }
        }
      }
    }
  }`

const normalizeCommits = _.compose(
  _.map(commit =>
    _.merge({ author: _.path('author.name', commit) }, _.omit('author', commit))
  ),
  _.path('response.data.repository.defaultBranchRef.target.history.nodes')
)

const commits = (actionStream, store) =>
  actionStream.ofType(API_COMMITS).switchMap(action =>
    gqlRequest(
      store.getState().token,
      commitsQuery(store.getState().userName, action.repoName)
    )
      .map(response => addCommits(action.repoName, normalizeCommits(response)))
      .catch(() => Observable.empty())
  )

export default commits
