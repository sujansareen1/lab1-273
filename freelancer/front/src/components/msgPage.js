import React, {Component} from 'react';
import PropTypes from 'prop-types';

class msgPage extends Component {

    static propTypes = {
        msg: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    {this.props.msg && ( //Just a change here
                        <div className="alert alert-warning" role="alert">
                            {this.props.msg}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default msgPage;