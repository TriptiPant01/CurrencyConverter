import React from 'react'
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import Proptypes from 'prop-types'

import color from 'color'

import styles from './styles'

const InputwithButton = (props) => {
	const { onPress, buttonText, editable = true} = props

	const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
	);
	
	const containerStyles = [styles.container]
	if(editable === false) {
		containerStyles.push(styles.containerDisabled)
	}

	return (
		(
			<View style={containerStyles}>
				<TouchableHighlight 
				onPress={onPress} 
				style={styles.buttonContainer}
				underlayColor={underlayColor}
				>
				<Text style={styles.buttonText}>{buttonText}</Text>
				</TouchableHighlight>
				<View styles={styles.border} />
				<TextInput style={styles.input} {...props}/>
			</View>
		)
	)
}
InputwithButton.Proptypes= {
	onPress : Proptypes.func,
	buttonText: Proptypes.string,
	editable: Proptypes.bool
}

export default InputwithButton