import EStylesheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'

export default EStylesheet.create({
	container : {
		position: 'absolute',
		left: 0,
		right:0,
		top:0,
		'@media ios': {
			paddingTop: 20
		},
		// '@media android' : {
		// 	paddingTop: StatusBar.currentHeight
		// }
	},
	button: {
		alignSelf: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 10

	},
	icon: {
		width: 18
	}

})