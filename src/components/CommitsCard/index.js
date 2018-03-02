import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import SvgToken from 'material-ui/svg-icons/communication/vpn-key'

import styles from './commits-card.scss'

class CommitsCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      commits: []
    }

    this.changeToken = this.changeToken.bind(this)
  }

  changeToken () {
    this.props.history.push(`/${this.props.location.search}`)
  }

  render () {
    return (
      <Card className={styles.main}>
        <div styleName='content'>
          <div styleName='title'>
            <CardTitle title='Commits' />

            <IconButton tooltip='Change Token' onClick={this.changeToken}>
              <SvgToken />
            </IconButton>
          </div>

          <Divider />
        </div>
      </Card>
    )
  }
}

CommitsCard.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default CommitsCard
