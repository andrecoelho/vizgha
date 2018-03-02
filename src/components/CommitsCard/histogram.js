import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash/fp'

import './commits-card.scss'

const Histogram = ({ commits }) => {
  const maxAddition = _.prop('additions', _.maxBy('additions', commits))
  const maxDeletion = _.prop('deletions', _.maxBy('deletions', commits))
  const max = Math.max(maxDeletion, maxAddition)

  return (
    <div styleName='histogram'>
      {commits.map(commit => (
        <div key={commit.oid} styleName='commit'>
          <div
            styleName='deletions'
            style={{
              width: `${Math.min(
                Math.ceil((commit.deletions / max) * 50),
                50
              )}%`
            }}
          />
          <div
            styleName='additions'
            style={{
              width: `${Math.min(
                Math.ceil((commit.additions / max) * 50),
                50
              )}%`
            }}
          />
        </div>
      ))}
    </div>
  )
}

Histogram.propTypes = {
  commits: PropTypes.array.isRequired
}

export default Histogram
