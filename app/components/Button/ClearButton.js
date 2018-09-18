import React from 'react'
import {View, TouchableOpacity, Text, Image} from 'react-native'
import Proptypes from 'prop-types'

import styles from './style'

const ClearButton = ({ text,onPress }) => (
	<TouchableOpacity onPress={onPress} style={styles.container}>
		<View style={styles.wrapper}>
			<Image 
			 source={require('./images/icon.png')}
			 style={styles.icon}
			 resizeMode='contain'
			 />

			<Text style={styles.text}> { text }</Text>
			</View>
	</TouchableOpacity>
)
ClearButton.Proptypes = {
	text: Proptypes.string,
	onPress: Proptypes.func
}

export default ClearButton