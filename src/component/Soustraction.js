import React,{Component} from 'react';
import Input from './Input';
import Button from './Button';

export default class Soustraction extends Component{
	constructor(){
		super()
		this.state={
			soustraction:{left_number : 0, right_number : 0 },
			result:0
		}
		this._getResult = this._getResult.bind(this);
		this._getInputValue = this._getInputValue.bind(this)
	}

	_object_ToArray(){
		this.state.soustraction= Object.keys(this.state.soustraction).map((key) => parseFloat(this.state.soustraction[key]));
	}

	_soustraction(){
		this.setState ({
			result:this.state.soustraction.reduce((a,b)=>a-b)
		})
	}

	_getResult(){
		this._object_ToArray.call(this);
		this._soustraction.call(this);
	}

	_getInputValue(e){
		let state=this.state.soustraction;
		state[e.target.name]= e.target.value;
		this.setState ({
			soustraction:state
		})
	}

	render(){
		return(
			<div>
				<div className='ui four column centered grid'>
					<div className='column'>
						<h2 className='centered-text'>Soustraction</h2>
					<span className='content-result centered-text'>Resultat:
					<span className='result'>{this.state.result}</span></span>

					<Input
					name='left_number'
					type='number'
					action={this._getInputValue}
					/>
					<span className='soustraction text-center'>-</span>
					<Input
					name='right_number'
					type='number'
					action={this._getInputValue}
					/>
					<Button action={this._getResult}/>
				</div>
			</div>
		</div>		

		)
	}	
}