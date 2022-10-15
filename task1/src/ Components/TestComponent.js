import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";


class TestComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			counter: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (way) => {

		this.setState((prevState) => {
			return {
				counter: prevState.counter + way
			}
		});
	}


	render(){
		return (
			<Stack gap={1}>
				<label className="form-label">{this.state.counter}</label>
				<Button onClick={() => this.handleClick(1)}>Increment</Button>
				<Button onClick={() => this.handleClick(-1)}>Decrement</Button>
			</Stack>
		);
	}

}

export default TestComponent;
