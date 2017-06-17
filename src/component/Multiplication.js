import React,{Component} from 'react';
import Input from './Input';
import Button from './Button';

export default class Multiplication extends Component{
	constructor(){
		super()
		this.state={
			multiplication:{left_number : 0, right_number : 0 },
			result:0
		}
		this._getResult = this._getResult.bind(this);
		this._getInputValue = this._getInputValue.bind(this)
	}
	_object_ToArray(){
		this.state.multiplication= Object.keys(this.state.multiplication).map((key) => parseFloat(this.state.multiplication[key]));
	}
	_multiplication(){
		this.setState({
			result:this.state.multiplication.reduce((a,b)=> a*b)
		})
	}
	_getResult(){
		this._object_ToArray.call(this);
		this._multiplication.call(this);
	}
	_getInputValue(e){
		let state=this.state.multiplication;
		state[e.target.name]= e.target.value;
		this.setState({
			multiplication:state
		})
	}
	render(){
		return(
			<div>
				<h2 className='centered-text'>Multiplication</h2>
				<span className='content-result centered-text'>Resultat:
					<span className='result'>{this.state.result}</span></span>
				<Input
					name='left_number'
					type='number'
					action={this._getInputValue}
					/>
				<span>X</span>
				<Input
					name='right_number'
					type='number'
					action={this._getInputValue}
					/>
				<Button	action={this._getResult}/>
			</div>
		)
	}

		
}