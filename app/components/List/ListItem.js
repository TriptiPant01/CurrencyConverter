import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import styles from './styles'
import Icon from './Icon'

const ListItem = ({
	text,
	onPress, 
	selected = false, 
	checkmark = true, 
	visible= true,
	customIcon = null,
	iconBackground,


	}) => (
<TouchableHighlight onPress={onPress} underlayColor={styles.$underLayColor}>
	<View style={styles.row}>
		<Text style={styles.text}>{text}</Text>
		{selected
        ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
				: <Icon />
		}	
		{customIcon}

	</View>
</TouchableHighlight>

)
export default ListItem