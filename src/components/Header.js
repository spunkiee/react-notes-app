import React, { Component } from 'react';
import "./Header.css";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" className="navbar-pad">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        className="image-header"
                    />{'  '}
                    <span className="header-text">Keep Idea!</span>
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}