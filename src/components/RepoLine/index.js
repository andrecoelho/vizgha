import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'
import SvgToggleStar from 'material-ui/svg-icons/toggle/star'
import SvgFork from 'material-ui/svg-icons/communication/call-split'
import SvgIssue from 'material-ui/svg-icons/action/bug-report'

import CountBadge from 'components/CountBadge'

import {
  darkBlack,
  blue100,
  blue800,
  grey100,
  orange100,
  orange800,
  yellow200,
  lightGreen100,
  lightGreen800
} from 'material-ui/styles/colors'

import './repo-line.scss'

const RepoLine = ({ repo, showCommits }) => (
  <ListItem secondaryTextLines={2} onClick={() => showCommits(repo.name)}>
    <div styleName='main'>

      <div styleName='text'>
        <b>{repo.name}</b>
        <div>
          <div styleName='description'>{repo.description}</div>
          <div style={{ color: darkBlack }}>
            {repo.languages.join(', ') || <i>&mdash;</i>}
          </div>{' '}
        </div>
      </div>

      <div styleName='badges'>
        <CountBadge
          svgIcon={<SvgFork />}
          iconBgColor={blue100}
          iconColor={grey100}
          label={repo.forkCount}
          labelBgColor={blue800}
        />
        <CountBadge
          svgIcon={<SvgToggleStar />}
          iconBgColor={orange100}
          iconColor={yellow200}
          label={repo.starCount}
          labelBgColor={orange800}
        />
        <CountBadge
          svgIcon={<SvgIssue />}
          iconBgColor={lightGreen100}
          iconColor={grey100}
          label={repo.issueCount}
          labelBgColor={lightGreen800}
        />
      </div>
    </div>
  </ListItem>
)

RepoLine.propTypes = {
  repo: PropTypes.object.isRequired,
  showCommits: PropTypes.func
}

export default RepoLine
