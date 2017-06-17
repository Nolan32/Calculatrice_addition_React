import React,{Component} from'react';

export default class Button extends Component{
	render(){
		const{action}=this.props;
	return(
			<div className='button-egale'>
				<button onClick={action} className='ui green fluid button'>Egale</button>
			</div>	
		)
	}
}