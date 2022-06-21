import React from 'react'
import {View, Text} from 'react-native'
import Nodes from './Nodes' 
import Input from './Input' 


class Node extends React.Component {

	render () {
	return (
	<View>
		<Text>You are currently in node</Text>
		<Input value={this.props.map[this.props.route.params.id].label} onChange={(name) => this.props.rename(this.props.route.params.id, name.trim())}/>

		<View>
			<Nodes {...this.props} list={this.props.map[this.props.route.params.id].ids} />
		</View>
		
	</View>
	)
	}
}	

export default Node