import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash/fp'

import { Card, CardTitle } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import SvgBack from 'material-ui/svg-icons/image/navigate-before'
import SvgToken from 'material-ui/svg-icons/communication/vpn-key'

import Histogram from './histogram'
import styles from './commits-card.scss'

class CommitsCard extends Component {
  constructor (props) {
    super(props)

    this.showRepositories = this.showRepositories.bind(this)
    this.changeToken = this.changeToken.bind(this)
  }

  componentWillMount () {
    if (!_.has('commits', this.props.repo)) {
      this.props.apiCommits(this.props.match.params.name)
    }
  }

  showRepositories () {
    this.props.history.push(`/repos${this.props.location.search}`)
  }

  changeToken () {
    this.props.history.push(`/${this.props.location.search}`)
  }

  render () {
    const isCommitsLoaded = _.has('commits', this.props.repo)
    const noCommits = isCommitsLoaded && this.props.repo.commits.length === 0

    return (
      <Card className={styles.main}>
        <div styleName='content'>
          <div styleName='title'>
            <IconButton
              tooltip='Repositories'
              onClick={this.showRepositories}
              style={{ padding: 0 }}
            >
              <SvgBack style={{ marginTop: 3 }} />
            </IconButton>

            <CardTitle
              title='Commits'
              subtitle={`${this.props.repo.name}:master`}
              className={styles.titleText}
            />

            <IconButton tooltip='Change Token' onClick={this.changeToken}>
              <SvgToken />
            </IconButton>
          </div>

          {!isCommitsLoaded &&
            this.props.commitsLoading && (
            <div styleName='empty'>
              <img src='/assets/loading.svg' />
            </div>
          )}

          {isCommitsLoaded &&
            !this.props.commitsLoading && (
            <Histogram commits={this.props.repo.commits} />
          )}

          {noCommits && (
            <div styleName='empty'>This repo does not have any commits.</div>
          )}
        </div>
      </Card>
    )
  }
}

CommitsCard.propTypes = {
  apiCommits: PropTypes.func.isRequired,
  repo: PropTypes.object.isRequired,
  commitsLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default CommitsCard
