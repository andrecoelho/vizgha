import { combineEpics } from 'redux-observable'

import repos from './repos'
import commits from './commits'

export default combineEpics(repos, commits)
