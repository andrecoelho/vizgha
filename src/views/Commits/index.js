import React from 'react'
import { connect } from 'react-redux'

import CommitsCard from 'components/CommitsCard'

import './commits.scss'

const Commits = props => (
  <div styleName='main'>
    <CommitsCard {...props} />
  </div>
)

const mapStateToProps = state => ({
  commits: state.commits
})

export default connect(mapStateToProps)(Commits)
