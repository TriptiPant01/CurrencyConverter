import React from 'react'
import {View} from 'react-native'
import Proptypes from 'prop-types' 

import styles  from './styles'

const Container = ( {children} ) => (
	<View style={styles.container}>
		 {children}
	</View>
)
Container.prototype = {
	children: Proptypes.element
}

export default Container