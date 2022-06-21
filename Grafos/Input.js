import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = ({value, hint, onChange}) => (
	<View style={styles.inputContainer} >
	
		<TextInput placeholder={hint}
			placeholderTextColor='#CACACA'
			selectionColor='#666666' 
			onChangeText={onChange} 
			value={value} 
			style={styles.input} />

	</View>
)

const styles = StyleSheet.create({
	inputContainer: {
		marginLeft: 20,
		marginRight: 20,
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowOffset: {
			width: 2,
			height: 5
		},
		alignSelf: 'stretch',
		flex: 2
	}, input: {
		paddingLeft: 10,
		paddingRight: 10,
		flex: 1,
		alignSelf: 'stretch', 
		fontSize: 40
	}
})

export default Input