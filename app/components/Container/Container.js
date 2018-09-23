import React from 'react'
import {View} from 'react-native'
import Proptypes from 'prop-types' 

import styles  from './styles'

const Container = ( {children , backgroundColor} ) => {
	const containerStyles = [styles.container]
	if(backgroundColor) {
		containerStyles.push({backgroundColor})
	}
	return (
		<View style={containerStyles}>
			 {children}
		</View>
	)

}
Container.prototype = {
	children: Proptypes.element
}

export default Container  
