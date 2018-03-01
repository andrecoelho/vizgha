import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

const CountBadge = ({
  svgIcon,
  iconBgColor,
  iconColor,
  labelBgColor,
  label
}) => (
  <Chip backgroundColor={iconBgColor} style={{ margin: 4 }}>
    <Avatar
      size={32}
      color={iconColor}
      backgroundColor={labelBgColor}
      icon={svgIcon}
    />
    {label}
  </Chip>
)

CountBadge.propTypes = {
  svgIcon: PropTypes.element.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  labelBgColor: PropTypes.string.isRequired,
  label: PropTypes.number.isRequired
}

export default CountBadge
