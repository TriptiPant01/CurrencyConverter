import React, {Component} from 'react'
import {View, FlatList, Text, StatusBar} from 'react-native'
import currencies from '../data/currencies';
import {connect} from 'react-redux'

import { ListItem, Seperator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD'
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
		return (
			<View style={{flex: 1}}>
				<StatusBar barStyle= 'default' translucent={false}/>
						<FlatList 
						data={currencies}
						renderItem= {({ item }) => (
							<ListItem 
							text= {item}
							selected={item === TEMP_CURRENT_CURRENCY}
							onPress={() => this.handlePress(item)}
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

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, null)(CurrencyList)