import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

  render () {
    return (
      <div styleName='main'>
        <Card className={styles.repos}>
          <div styleName='title'>
            <CardTitle className={styles.titleText}>
              Repositories List
            </CardTitle>
            <RaisedButton>
              <Link to='/' className={styles.changeToken}>
                Change Token
              </Link>
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
  apiRepos: PropTypes.func.isRequired,
  repos: PropTypes.array
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
