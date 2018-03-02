import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'

import CommitsCard from 'components/CommitsCard'
import { apiCommits } from 'store/actions/creators'
import './commits.scss'

const Commits = props => (
  <div styleName='main'>
    <CommitsCard {...props} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  commitsLoading: state.commitsLoading,
  repo: _.find(repo => repo.name === ownProps.match.params.name, state.repos) || {}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiCommits (userName, repoName) {
    dispatch(apiCommits(userName, repoName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Commits)
