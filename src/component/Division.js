import React,{Component} from 'react';
import Input from './Input';
import Button from './Button';

export default class Division extends Component{
	constructor(){
		super();
		this.state={
			division:{left_number : 0, right_number : 0},
			result:0
		}
		this._getResult = this._getResult.bind(this);
		this._getInputValue=this._getInputValue.bind(this);
	}
	_object_ToArray(){
		this.state.division= Object.keys(this.state.division).map((key)=> parseFloat(this.state.division[key]));

	}
	_division(){
		this.setState({
			result:this.state.division.reduce((a,b)=> a/b)
		})
	}	
	_getResult(){
		this._object_ToArray.call(this);
		this._division.call(this);
//		this.setState({
//			division:{left_number : 0,right_number:0},
//			result:0
//		})
	}
	_getInputValue(e){
		let state=this.state.division;
		state[e.target.name]=e.target.value
		this.setState({
			division:state
		})
	}
	render(){
		return(
			<div>
				<h2 className='centered-text'>Division</h2>
				<span className='content-result centered-text'>Resultat:
					<span className='result'>{this.state.result}</span></span>
					<Input
						name='left_number'
						type='number'
						action={this._getInputValue}
						/>
					<span>/</span>
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