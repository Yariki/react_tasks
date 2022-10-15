import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';

import TestPureComponent from "./ Components/TestPureComponent";
import TestComponent from "./ Components/TestComponent";
import FuncComponent from './ Components/FunctionalComponent';


function App() {

	const cmp = React.createElement('div', null, 'React.createElement');

  return (
    <div className="container">
      <header className="navbar">
		  {cmp}
      </header>

		<Stack gap={3}>
			<TestPureComponent name="For testing PureComponent"/>
			<TestComponent />
      <FuncComponent /> 

		</Stack>
    </div>
  );
}

export default App;
