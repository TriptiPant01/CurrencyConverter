import React, {Component} from 'react'
import {View, FlatList, Text, StatusBar} from 'react-native'
import currencies from '../data/currencies';
import {connect} from 'react-redux'

import { ListItem, Seperator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
	
	handlePress =(currency) => {
		const {type} = this.props.navigation.state.params
		console.log(type)
		if(type  === 'Base') {
			this.props.dispatch(changeBaseCurrency(currency))
		}
		else if(type === 'Quote') {
			this.props.dispatch(changeQuoteCurrency(currency))
		}


		this.props.navigation.goBack(null)
	}
	render() {
		let comparisonCurrency = this.props.baseCurrency
		if(this.props.navigation.state.params.type === 'Quote' ) {
			comparisonCurrency= this.props.quoteCurrency
		}
		console.log(comparisonCurrency)
		return (
			<View style={{flex: 1}}>
				<StatusBar barStyle= 'default' translucent={false}/>
						<FlatList 
						data={currencies}
						renderItem= {({ item }) => (
							<ListItem 
							text= {item}
							selected={item === comparisonCurrency}
							onPress={() => this.handlePress(item)}
							iconBackground={this.props.primaryColor}
						/>
						)
			
					}
						keyExtractor={item => item}
						ItemSeparatorComponent={Seperator}
						/>
		</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		baseCurrency: state.currencies.baseCurrency,
		quoteCurrency: state.currencies.quoteCurrency,
		primaryColor: state.theme.primaryColor
	}

}

export default connect(mapStateToProps, null)(CurrencyList)