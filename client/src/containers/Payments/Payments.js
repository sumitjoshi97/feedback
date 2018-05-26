import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import { handleToken } from '../../store/actions/userActions';

import './Payments.css';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="$5 for 5 emails"
                amount={500}
                token={token => this.props.onHandleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onHandleToken: (token) => dispatch(handleToken(token))
    }
}
export default connect(null, mapDispatchToProps)(Payments);