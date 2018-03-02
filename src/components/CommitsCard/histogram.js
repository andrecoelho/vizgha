import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash/fp'

import './commits-card.scss'

const Histogram = ({ commits }) => {
  if (commits.length === 0) {
    return (
      <div styleName='empty'>
        <img src='/assets/loading.svg' />
      </div>
    )
  }

  const maxAddition = _.prop('additions', _.maxBy('additions', commits))

  const maxDeletion = _.prop('deletions', _.maxBy('deletions', commits))

  return (
    <div styleName='histogram' data-max-addition={maxAddition}>
      {commits.map(commit => (
        <div key={commit.oid} styleName='commit'>
          <div
            styleName='deletions'
            style={{
              width: `${Math.min(
                Math.ceil(commit.deletions / maxDeletion * 50),
                100
              )}%`
            }}
            data-addition={commit.additions}
          />
          <div
            styleName='additions'
            style={{
              width: `${Math.min(
                Math.ceil(commit.additions / maxAddition * 50),
                100
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
