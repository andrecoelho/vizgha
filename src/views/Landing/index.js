import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TokenForm from 'components/TokenForm'
import { addToken } from 'store/actions/creators'

import './landing.scss'

const Landing = ({ onAddToken }) => (
  <div styleName='main'>
    <div styleName='backdrop' />
    <TokenForm onAddToken={onAddToken} />
  </div>
)

Landing.propTypes = {
  onAddToken: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onAddToken (token) {
    dispatch(addToken(token))
  }
})

export default connect(null, mapDispatchToProps)(Landing)
