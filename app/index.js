import React from 'react'
import EStylesheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

import CurrencyConverter from './screens/CurrencyList'

import Navigator from './config/routes'
import {AlertProvide} from './components/Alert'

EStylesheet.build({
	$primaryBlue: '#4F6D7A',
	$white: '#FFFFFF',
	$border: '#979797',
	$inputText: '#797979',
	$lightGray: '#F0F0F0',
	$darkText: '#343434',
	$primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',


	// $outline: 1,
})

export default () => <AlertProvide> <Navigator /></AlertProvide>