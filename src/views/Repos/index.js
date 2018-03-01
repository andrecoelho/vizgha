import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Card, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField/TextField'
import { List, ListItem } from 'material-ui/List'

import { apiRepos } from 'store/actions/creators'

import styles from './repos.scss'

class Repos extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: ''
    }

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onClick () {
    this.props.apiRepos(this.state.userName)
  }

  onChange (event) {
    this.setState({
      userName: event.currentTarget.value
    })
  }

  changeToken () {
    this.props.history.push(`/${this.props.location.search}`)
  }

  render () {
    return (
      <div styleName='main'>
        <Card className={styles.repos}>
          <div styleName='title'>
            <CardTitle className={styles.titleText}>
              Repositories List
            </CardTitle>

            <RaisedButton
              className={styles.changeToken}
              onClick={this.changeToken}
            >
              Change Token
            </RaisedButton>
          </div>

          <Divider />

          <TextField
            id='githubUserName'
            hintText='GitHub User Name'
            value={this.state.userName}
            onChange={this.onChange}
          />

          <RaisedButton primary onClick={this.onClick}>
            Show Repos
          </RaisedButton>

          <Divider />

          <List>
            {this.props.repos &&
              this.props.repos.map(repo => (
                <ListItem key={repo.id}>{repo.name}</ListItem>
              ))}
          </List>
        </Card>
      </div>
    )
  }
}

Repos.propTypes = {
  repos: PropTypes.array,
  apiRepos: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiRepos (userName) {
    dispatch(apiRepos(userName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
