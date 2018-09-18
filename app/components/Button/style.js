import EStylesheet from 'react-native-extended-stylesheet'

export default EStylesheet.create({
	container: {
alignItems: 'center'
	},
	wrapper: {
flexDirection:'row',
alignItems: 'center'
	},
	icon: {
width: 19,
marginRight: 11
	},
	text: {
color: '$white',
fontSize: 14,
	}
})