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
              author {
                name
              }
              message
              committedDate
              authoredDate
              additions
              deletions
              treeUrl
            }
          }
        }
      }
    }
  }`

const extractCommitsInfo = _.compose(
  addCommits,
  _.map(commit =>
    _.merge({ author: _.path('author.name', commit) }, _.omit('author', commit))
  ),
  _.path('response.data.repository.defaultBranchRef.target.history.nodes')
)

const commits = (actionStream, store) =>
  actionStream.ofType(API_COMMITS).switchMap(action =>
    gqlRequest(
      store.getState().token,
      commitsQuery(action.userName, action.repoName)
    )
      .map(extractCommitsInfo)
      .catch(() => Observable.empty())
  )

export default commits
