import React from 'react'
import { connect } from 'react-redux'

import ReposCard from 'components/ReposCard'
import { apiRepos } from 'store/actions/creators'
import './repos.scss'

const Repos = props => (
  <div styleName='main'>
    <ReposCard {...props} />
  </div>
)

const mapStateToProps = state => ({
  userName: state.userName,
  repos: state.repos,
  reposLoading: state.reposLoading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiRepos (userName) {
    dispatch(apiRepos(userName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
