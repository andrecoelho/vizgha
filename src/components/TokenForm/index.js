import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './token-form.scss'

class TokenForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      token: ''
    }

    this.onAddToken = this.onAddToken.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onAddToken () {
    this.props.onAddToken(this.state.token)
    this.setState({ token: '' })
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this.onAddToken()
    }
  }

  onChange (event) {
    this.setState({
      token: event.currentTarget.value
    })
  }

  render () {
    return (
      <Card className={styles.main}>
        <CardText className={styles.text}>
          Please enter a <i>GitHub Personal Token</i> below. It will be used to
          authenticate requests to the GitHub API.
        </CardText>

        <TextField
          id='tokenInput'
          className={styles.token}
          fullWidth
          value={this.state.token}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />

        <RaisedButton
          label='Start'
          primary
          fullWidth
          onClick={this.onAddToken}
        />
      </Card>
    )
  }
}

TokenForm.propTypes = {
  onAddToken: PropTypes.func.isRequired
}

export default TokenForm
