import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

const Button = ({action, label}) => (
	<View style={styles.buttonContainer}>
		<TouchableHighlight underlayColor={'#0f0f0f'} style={styles.button} onPress={action}>
			<Text style={styles.submit}>
				{label}
			</Text>	
		</TouchableHighlight>
	</View>
)



const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'flex-end',
		alignSelf: 'stretch',
		flex: 1
	}, button: {
		paddingLeft: 20,
		paddingRight: 20,
		marginRight: 15,
		marginLeft: 15,
		marginTop: 15,
		marginBottom: 15,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba('+Math.floor(Math.random() * 200 + 56)+', '+Math.floor(Math.random() * 206 + 50)+', '+Math.floor(200 + Math.random() * 56)+', '+Math.random()+')',
		alignSelf: 'stretch',
		flex: 1
	}, submit: {
		fontWeight: '900',
		fontSize: 30
	}
})

export default Button