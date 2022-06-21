import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Node from './Node'
import Nodes from './Nodes'

const NodesNav = createStackNavigator()

const NodesNavScreen = ({map, list, rename}) => (
	<NodesNav.Navigator>
		<NodesNav.Screen name="All Nodes">
		{ (props) => <Nodes {...props} map={map} list={list} /> }
		</NodesNav.Screen>
		<NodesNav.Screen name="View Node">
		{ 
			(props) => <Node {...props} map={map} rename={rename} /> // options={({ route }) => ({ title: route.params.city.city })}
		}	
		</NodesNav.Screen>	
	</NodesNav.Navigator>
  )
  
export default NodesNavScreen 
