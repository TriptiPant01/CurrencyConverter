import EStylesheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const imageWidth = Dimensions.get('window').width/2
console.log(imageWidth)

export default EStylesheet.create({
	$largeContainerSize: imageWidth,
	$largeImageSize: imageWidth / 2,
	$smallContainerSize: imageWidth / 2,
	$smallImageSize: imageWidth / 4,
	container: {
		alignItems: 'center'
	},

	containerImage: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '$largeContainerSize',
		height: '$largeContainerSize',
	},
	logo : {
	width: '$largeImageSize'
	},
	text: {
		fontWeight: '600',
		fontSize: 18,
		marginTop:15,
	color: '$white'

	}
})
