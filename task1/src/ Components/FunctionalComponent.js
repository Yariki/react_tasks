import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';

function FuncComponent() {

    const handleClick = () => {
        alert("Search button clicked");
    }

    return ( <div className="row">
        <label>Functional Component</label>
        <div className="col-auto">
            <Form.Control type="text" className='form-control' ></Form.Control>
            <Button onClick={handleClick} className="form-control">Search</Button>
        </div>
    </div> );
}

export default FuncComponent;

