import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

const Header = ({ onPress }) => (
	<View style ={styles.container}>
		<TouchableOpacity style={styles.button} onPress={onPress}>
		<Image 
		resizeMode="contain" 
		source={require('./images/gear.png')}
		style={styles.icon}
/>
		</TouchableOpacity>
	</View>
)

export default Header