import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TokenForm from 'components/TokenForm'
import { addToken } from 'store/actions/creators'

import './landing.scss'

const Landing = ({ onAddToken }) => (
  <div styleName='main'>
    <TokenForm onAddToken={onAddToken} />
  </div>
)

Landing.propTypes = {
  onAddToken: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddToken (token) {
    dispatch(addToken(token))
    ownProps.history.push('/repos')
  }
})

export default connect(null, mapDispatchToProps)(Landing)
