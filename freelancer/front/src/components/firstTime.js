import React, {Component} from 'react';
import PropTypes from 'prop-types';

class logInPage extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {

        user_name: '',
        password: '',
        email: ''
    };

    componentWillMount(){
        this.setState({
            user_name: '',
            password: '',
            email: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                </div>

                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Signup</h1>
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
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
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default logInPage;