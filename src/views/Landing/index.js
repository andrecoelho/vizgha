import React from 'react'
import { Card, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './landing.scss'

const Landing = props => (
  <div styleName='landing'>
    <div styleName='backdrop' />
    <Card className={styles.ghpt}>
      <CardText className={styles.ghptText}>
        Please enter a <i>GitHub Personal Token</i> below. It will be used to authenticate requests to the GitHub API.
      </CardText>
      <TextField fullWidth className={styles.ghptInput} />
      <RaisedButton label='Start' primary fullWidth />
    </Card>
  </div>
)

export default Landing
