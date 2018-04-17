import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';
import * as API from '../api/Interface';
import Welcome from "./welcomePage";
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { Carousel } from 'react-responsive-carousel';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Login from "./logInPage";
import Message from "./msgPage";
import image from './freelan.png';
class homePage extends Component {

    state = {
        isLoggedIn: false,
        msg: '',
        user_name: ''
    };

    handleSubmit = (fun) => {
console.log("handle submit--->",fun)
        API.LogIn(fun)
            .then((status) => {
                if (status === 200) {
                    this.setState({

                        isLoggedIn: true,
                        msg: "Login again to enter your profile",
                        user_name: fun.user_name
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        msg: "Attempt unsuccessful"
                    });
                }
            });
    };

    render() {
        return (


            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>

                                <a href="#"><img src={image} weight="80" height="60"/></a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>&nbsp;
                        <Navbar.Collapse>
                            <Nav>



                                <NavDropdown eventKey={3} title="Hire Freelancers" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}><b>Post a Project</b></MenuItem>
                                    <MenuItem eventKey={3.2}><b>Post a Contest</b></MenuItem>
                                    <MenuItem eventKey={3.3}><b>Post a local job</b></MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}><b>Discover</b></MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={4} title="Find Work" id="basic-nav-dropdown">
                                    <MenuItem eventKey={4.1}><b>Browse Projects</b></MenuItem>
                                    <MenuItem eventKey={4.2}><b>Browse Categories</b></MenuItem>
                                    <MenuItem eventKey={4.3}><b>Browse Contests</b></MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={4.3}><b>Find Work</b></MenuItem>
                                </NavDropdown>

                                <NavItem eventKey={2} href="#">
                                    How it Works
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={2} componentClass={Link} href="/about" to="/login">
                                    <h3><b> Log In</b></h3>
                                </NavItem>
                                <NavItem eventKey={1} href="#">
                                 <h3><b> Sign Up</b></h3>
                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>

                        <Message msg={this.state.msg}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome user_name={this.state.user_name}/>
                )}/>


            </div>

        );
    }
}

export default withRouter(homePage);