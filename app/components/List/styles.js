import EStylesheet from 'react-native-extended-stylesheet'
import {StyleSheet} from 'react-native'

const styles = EStylesheet.create({
	$underLayColor : '$border',
	row: {
 paddingHorizontal: 15,
 paddingVertical: 16,
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'center',
 backgroundColor: '$white'
	},
	text: {
		fontSize: 16,
		color: '$darkText'
	},
	seperator: {
		marginLeft: 20,
		backgroundColor: '$border',
		flex:1,
		height: StyleSheet.hairlineWidth
	},
	icon: {
backgroundColor: 'transparent',
width: 30,
height: 30,
borderRadius: 15
	},
	iconVisible: {
    backgroundColor: '$primaryBlue',
	},
	checkIcon: {
		width: 30
	}

})

export default styles