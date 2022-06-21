import React from 'react'
import {Text, View, ScrollView} from 'react-native'

import Button from './Button'

const Nodes = ({list, map, navigation}) => (
	<ScrollView  contentContainerStyle={[!list.length && { flex: 1 }]}>
		<Text>{list.length} node{(list.length === 1) ? '' : 's'}:</Text>
		<View style={[!list.length && { justifyContent: 'center', flex: 1 }]}>
			{list.map((it, i) => (<Button label={map[it].label} action={() => navigation.navigate('View Node', { id: it })} key={i} />))}
		</View>
	</ScrollView>
)

export default Nodes