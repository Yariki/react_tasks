import React from "react";
import { Navbar } from "react-bootstrap";


export const Header: React.FC = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                Netflix Roulette
            </Navbar.Brand>
        </Navbar>
    );   
}