import React,{Component} from 'react'

export default class Input extends Component{
	render(){
		const {children,name,type,action}=this.props;
	
		return(
			<div className='ui-form'>
				<div className='field'>
					<label htmlFor={name}>{children}</label>
					<input name={name}  id={name} type={type} onChange={action}/>
				</div>
			</div>		
			);
	
	}
};

