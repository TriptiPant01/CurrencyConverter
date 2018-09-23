
import React, {Component} from 'react'
import {View, Image, Text, ImageBackground, Keyboard, Animated} from 'react-native'

import Style from './style'

class Logo extends Component {

	componentDidMount () {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  	
	}
	componentWillUnmount () {
		this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
	}

	keyboardShow = () => {
		console.log('show')
	}
	_keyboardDidHide = () => {
		console.log('hide')
	}
	render () {
		const imageStyle = [
			Style.logo,
			this.props.tintColor ? {tintColor: this.props.tintColor} : null
		]
		return (
				<View style={Style.container}>
					<ImageBackground
					resizeMode='contain'
					source={require('./images/background.png')} 
					style={Style.containerImage}
					
					>
				<Image 
				resizeMode='contain'
					source={require('./images/logo.png')}
					style={imageStyle}
				/>
					</ImageBackground>
							<Text style={Style.text}>Currency Converter</Text>
					</View>
		)
	}
}


export default Logo