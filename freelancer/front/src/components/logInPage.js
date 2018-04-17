import PropTypes from 'prop-types';
import React, {Component} from 'react';
import image from './freelan.png';
import imag from './face.png';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class logInPage extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        user_name: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            user_name: '',
            password: ''
        });
    }

    render() {
        return (

            <div className="row justify-content-md-center">

                <div className="col-md-4">
                </div>

                <div className="col-md-3"><br/><br/>
                    <Navbar.Brand>

                        <a href="#"><img src={image} weight="80" height="60"/></a>
                    </Navbar.Brand><br/><br/><br/><br/>
                    <form>
                        <div className="form-group">
                            <h1><b>LOG IN</b></h1>
                        </div><br/>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Your Email"
                                value={this.state.user_name}
                                onChange={(event) => {
                                    this.setState({
                                        user_name: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Your Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                            <br/>
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Submit
                            </button>

                        </div>
                        <p class="text-muted">------OR-----</p>
                    </form><br/><br/><br/>
                    <Navbar.Brand>

                        <a href="#"><img src={imag} weight="200" height="150"/></a>
                    </Navbar.Brand><br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default logInPage;