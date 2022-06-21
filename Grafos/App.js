import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import AddEdges from './AddEdge'
import NodesNavScreen from './NodesNavScreen'

 
const Tab = createMaterialBottomTabNavigator()
 
export default class App extends React.Component {

 constructor () {
	super()

	this.set_edge = this.set_edge.bind(this)
	this.add_edge = this.add_edge.bind(this)
	this.add_node = this.add_node.bind(this)
	this.get_node = this.get_node.bind(this)
	this.rename_node = this.rename_node.bind(this)
	this.node = this.node.bind(this)
 }	
 
 state = {
	ids: [], // lista dos ids dos vértices adicionados
	last_id: 0, // id do último que foi adicionado (incrementar a cada novo)

	nodes: {}, // mapeamento de id para vértice {label, ids}
	labels: {} // mapeamento de rótulo para todos os ids que já a contiveram

	 
 }

 add_edge (a, b, callback) {
	this.node(a, () => this.node(b, () => this.set_edge(a, b, callback)))
 }

 set_edge (x, y, callback) {
	let a = this.get_node(x)
	let b = this.get_node(y)

	a.ids.push(b.id)
	b.ids.push(a.id)
	
	const {nodes} = this.state
	nodes[a.id] = a
	nodes[b.id] = b
	this.setState({nodes}, callback) 
 }

 get_node (label) {
	const nodes = this.state.labels[label]
	if(nodes === undefined || nodes.length < 1)  
		return undefined 
	
	const node = this.state.nodes[nodes[nodes.length - 1]]	
	if(node === undefined || node.label !== label)
		return undefined
	return node 	
 }
 
 add_node (label, callback = (() => console.log('\tNovo vértice adicionado (sem retorno requisitado)'))) {
	const {ids, nodes, labels} = this.state
	const id = this.state.last_id + 1	// incrementamos o id 
	ids.push(id)	// adicionamos o id do vértice na lista
	nodes[id] = {label, id, ids: []}	// e o vértice no mapa
	
	if(labels[label] === undefined)
		labels[label] = []	// (também criamos a lista, caso já não houvesse)
	labels[label].push(id)	// e o id no mapa por rótulo 	

	//	ALTERAÇÃO: confirmar antes de adicionar uma label que já havia sido usada (else)

	// confirmar e guardar as alterações	
	this.setState({last_id: id, ids, labels, nodes}, callback) 
 }

 rename_node (id, label) {
	const {nodes, labels} = this.state
	const node = nodes[id]
	if(node === undefined) { // problemas!
		//	ALTERAÇÃO: perguntar se quer criar o vértice, caso ele ainda não exista (caso impossível: não será indicado um id inexistente ao renomear um vértice existente)
	} else {
		node.label = label 
		nodes[id] = node // guardar novamente, para garantir que não houve erro de referência (javascript é esquisito, não confio)
		if(labels[label] === undefined)
			labels[label] = [id] 
		else {
			labels[label].push(id)
			if(nodes[labels[label][labels[label].length - 2]].label === label) // se o rótulo atual do último vértice que tinha esse rótulo ainda for esse, teremos um problema!
			{
				//	ALTERAÇÃO: perguntar para renomear como "Cópia de " .... 
			}
		}	

		this.setState({nodes, labels}) // "salvar" alterações 
	}	
 }

 node (label, callback = console.log) {
	const node = this.get_node(label)
	if(node === undefined) 
		this.add_node(label, callback)
	else callback()	
 } 
  
 render () {
	return(
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='All nodes'>
					{(props) => <NodesNavScreen {...props} list={this.state.ids} map={this.state.nodes} />}
				</Tab.Screen>
				<Tab.Screen name='Add edge'>
					{(props) => <AddEdges {...props} add={this.add_edge} />}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	)
 }

 componentDidUpdate (prevProps, prevState) {
	console.log(this.state)
 }
}

