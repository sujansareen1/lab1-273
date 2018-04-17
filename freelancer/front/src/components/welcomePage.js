import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';


class welcomePage extends Component {

    static propTypes = {
        user_name: PropTypes.string.isRequired
    };

    state = {
        user_name : ''
    };

    componentWillMount(){
        this.setState({
            user_name : this.props.user_name
        });
        //document.title = `welcomePage, ${this.state.user_name} !!`;
    }

    componentDidMount(){
        document.title = `welcomePage, ${this.state.user_name} !!`;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                       Hi {this.state.user_name}, Login Successful
                    </div>
                    <Link to="/login">Logout</Link>
                </div>

            </div>
        )
    }
}

export default withRouter(welcomePage);