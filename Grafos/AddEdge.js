import React from 'react'
import { View } from 'react-native'

import Button from './Button' 
import Input from './Input' 

 
export default class AddEdges extends React.Component {

	submit () {
		console.log('Enviando....')
		this.props.add(this.state.label_a.trim(), this.state.label_b.trim(), this.success)
	}

	success () {
		console.log('Recebido!')
		this.reset() // alertar o sucesso!
	}

	reset () {
		this.setState({
			label_a: '',
			label_b: ''
		})
	}

	constructor () {
		super()
		this.success = this.success.bind(this)
		this.submit = this.submit.bind(this)
		this.reset = this.reset.bind(this)

		this.state = {
			label_a: '',
			label_b: ''
		}
	}

	render () {
		return (<View>

			<Input hint='Node A'	value={this.state.label_a}	onChange={((a) => this.setState({label_a: a}))} />
			<Input hint='Node B'	value={this.state.label_b}	onChange={((b) => this.setState({label_b: b}))} />

			<Button label='Connect' action={this.submit} />
	
		</View>)
	}

}
 

 


