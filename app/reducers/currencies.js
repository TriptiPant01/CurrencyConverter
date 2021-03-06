import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY } from '../actions/currencies'

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions :{},
  error: null

};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };
   if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }
   return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

const reducer = (state = initialState, action) => {
	console.log(action, 'action')
	switch(action.type) {
		case CHANGE_CURRENCY_AMOUNT:
		return {
			...state,
			amount: action.amount || 0,
		};
		case SWAP_CURRENCY:
		return {
			...state,
			baseCurrency: state.quoteCurrency,
			quoteCurrency: state.baseCurrency

    }
    case CHANGE_BASE_CURRENCY: 
    return {
      ...state,
      baseCurrency: action.currency,
      conversions: setConversions(state, action),
    }
    case CHANGE_QUOTE_CURRENCY: 
    return {
      ...state,
      quoteCurrency: action.currency,
      conversions: setConversions(state, action),
    }
		default:
		return state
	}
}

export default reducer