import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ReposCard from 'components/ReposCard'
import { apiRepos } from 'store/actions/creators'

import './repos.scss'

const Repos = props => (
  <div styleName='main'>
    <ReposCard {...props} />
  </div>
)

Repos.propTypes = {
  userName: PropTypes.string.isRequired,
  repos: PropTypes.array,
  apiRepos: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userName: state.userName,
  repos: state.repos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiRepos (userName) {
    dispatch(apiRepos(userName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
