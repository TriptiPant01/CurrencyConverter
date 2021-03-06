import React, {Component} from 'react'
import {StatusBar, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'

import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';


class Home extends Component {
	// static propTypes ={

	// }
	componentWillMount () {
		this.props.dispatch(getInitialConversion())
	}
	handleChangeText = (text) => {
		this.props.dispatch(changeCurrencyAmount(text))
    console.log('change text');
  };
   handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'Base' })
  };
   handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'Quote' })
	};
	handleCurrency = () => {
		console.log('swap currency')

		this.props.dispatch(swapCurrency())
	}
	handleOnpressHeaderIcon = () => {
		this.props.navigation.navigate('Options', { title: 'Base Currency' })
	}
	render () {
	
		let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)
		if(this.props.fetching) {
				quotePrice = '...'
		}
		console.log(this.props.quoteCurrency, 'quote')
		return (
			<Container backgroundColor= {this.props.primaryColor}>
			<StatusBar translucent={false} barStyle="light-content" />
			<Header
			onPress={this.handleOnpressHeaderIcon}
			/>
			<KeyboardAvoidingView behavior='padding'>
			<Logo tintColor={this.props.primaryColor} />
			<InputWithButton
			buttonText ={this.props.baseCurrency}
			onPress={this.handlePressBaseCurrency}
			defaultValue={this.props.amount.toString()}
			keyboardType="numeric"
			onChangeText={this.handleChangeText}
			textColor={this.props.primaryColor}
			/>
			<InputWithButton
			editable={false}
			buttonText={this.props.quoteCurrency}
			onPress={this.handlePressQuoteCurrency}
			value={quotePrice}
			textColor={this.props.primaryColor}

			/>
			  <LastConverted
          date={this.props.lastConversionDate}
          base={this.props.baseCurrency}
          quote={this.props.quoteCurrency}
          conversionRate={this.props.conversionRate}
        />
			<ClearButton 
			text='Revserse Currency'
			onPress={this.handleCurrency}
			/>
			</KeyboardAvoidingView>
		</Container>
		)
	}
}

const mapStateToProps = (state) => {
	const baseCurrency =  state.currencies.baseCurrency
	const quoteCurrency = state.currencies.quoteCurrency
	const amount = state.currencies.amount
	const conversionSelector = state.currencies.conversions[baseCurrency] || {}
	const rates = conversionSelector.rates || {}
	const fetching = conversionSelector.isFetching
	return  {
		baseCurrency,
		quoteCurrency,
		amount,
		conversionRate: rates[quoteCurrency] || 0,
		fetching,
		primaryColor: state.theme.primaryColor,
		lastConversionDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date()
	}
}

export default connect(mapStateToProps, null)(Home)
