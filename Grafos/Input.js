import React from 'react'
import {View, TextInput, StyleSheet, Dimensions} from 'react-native'

const Input = ({value, hint, onChange}) => (
	<View style={styles.inputContainer} >
	
		<TextInput placeholder={hint}
			placeholderTextColor='#afbecd'
			selectionColor='#123456' 
			onChangeText={onChange} 
			value={value} 
			style={styles.input} />

	</View>
)

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
	inputContainer: {
		marginLeft: 20,
		marginRight: 20,
		alignSelf: 'stretch',
		flex: 1,
		minHeight: height/5
	}, input: {
		paddingLeft: 10,
		paddingRight: 10,
		flex: 1,
		alignSelf: 'stretch', 
		fontSize: 40
	}
})

export default Input