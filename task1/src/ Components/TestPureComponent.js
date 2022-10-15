import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TestPureComponent extends  React.PureComponent{

	constructor(props){
		super(props);

	}

	render(){

		const {name} = this.props;

		return (
			<div>
				<p>{name}</p>
			</div>
		);
	}
}

export default TestPureComponent;
