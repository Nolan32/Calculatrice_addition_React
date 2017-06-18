import React,{Component} from 'react';
import Input from './Input';
import Button from'./Button';

export default class Addition extends Component{
	constructor(){
		super();
		this.state={
			addition : {left_number : 0,right_number : 0},
			resultat:0
		}
		this._getResult = this._getResult.bind(this);
		this._getInputValue=this._getInputValue.bind(this);
	}

	_object_ToArray(){
		this.state.addition= Object.keys(this.state.addition).map((key) => parseFloat(this.state.addition[key]));
	}

	_addition(){
		this.setState ({
			result:this.state.addition.reduce((a,b)=>a+b)
		})
	}

	_getResult(){
		this._object_ToArray.call(this);
		this._addition.call(this);
	}

	_getInputValue(e){
		let state=this.state.addition;
		state[e.target.name]= e.target.value;
		this.setState ({
			addition:state
		})
	}

	render(){
		return(
			<div>
				<h1 className='centered-text'>Calculatrice</h1>
				<h2 className='centered-text'>Addition</h2>
				<span className='content-result  centered-text'>Resultat:
					<span className='result'> {this.state.result}</span></span>
						<Input
						name='left_number'
						type='number'
						action={this._getInputValue}
						/>
						<span className='addition'> + </span>
						<Input
						name='right_number'
						type='number'
						action={this._getInputValue}
						/>
						<Button action={this._getResult}/>
			</div>			
		)
	}
}