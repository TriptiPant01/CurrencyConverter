import React from 'react'
import {Text} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'

import styles from './style'

const LastConverted = ({date, base, quote, conversionRate}) => (
  <Text style={styles.smallText}>
    1
    {' '}
    {base}
    {' '}
=
    {' '}
    {conversionRate}
    {' '}
    {quote}
    {' '}
as of
    {' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>

)

// LastConverted.PropTypes = {
// 	date: PropTypes.object,
// 	base: PropTypes.string
// }
export default LastConverted