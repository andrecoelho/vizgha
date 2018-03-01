import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import { List } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SvgToken from 'material-ui/svg-icons/communication/vpn-key'

import RepoLine from '../RepoLine'

import styles from './repos-card.scss'

class ReposCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: this.props.userName
    }

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.changeToken = this.changeToken.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      userName: nextProps.userName
    })
  }

  onClick () {
    this.props.apiRepos(this.state.userName)
  }

  onChange (event) {
    this.setState({
      userName: event.currentTarget.value
    })
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this.onClick()
    }
  }

  changeToken () {
    this.props.history.push(`/${this.props.location.search}`)
  }

  render () {
    return (
      <Card className={styles.main}>
        <div styleName='content'>
          <div styleName='title'>
            <CardTitle title='User Repositories List' />

            <IconButton tooltip='Change Token' onClick={this.changeToken}>
              <SvgToken />
            </IconButton>
          </div>

          <Divider />

          <div styleName='userName'>
            <TextField
              id='githubUserName'
              hintText='GitHub User Name'
              value={this.state.userName}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />

            <RaisedButton
              primary
              className={styles.showReposButton}
              onClick={this.onClick}
              label='Show'
            />
          </div>

          <List className={styles.list}>
            {this.props.repos &&
              this.props.repos.map((repo, index) => (
                <div key={repo.id}>
                  {index > 0 && <Divider />}
                  <RepoLine repo={repo} />
                </div>
              ))}
          </List>
        </div>
      </Card>
    )
  }
}

ReposCard.propTypes = {
  userName: PropTypes.string.isRequired,
  repos: PropTypes.array,
  apiRepos: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default ReposCard
