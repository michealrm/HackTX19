import React, { useState } from "react";
import "./SubscriptionInfo.css"

const SubscriptionInfo = props => {

    const handleClick = event => {
        event.preventDefault();
        let token = event.target.getAttribute('name');

        // Note: This callback is temp. The billing api wasn't working, so we needed
        // to implement this portion without the api.
        // TODO: Take out the removeSubscription callback and replace the subscription
        // json import with a REST api call similar to the card details approach
        props.excludeSubscription(token);
    };

    return (
        <div class="subscription">
            <p>{ props.subscription['name'] }</p>
            <p>{ props.subscription.next_payment_date }</p>
            <p>{ props.subscription.config.amount }</p>
            <a href="#" name={ props.subscription.token } onClick={ handleClick }>Cancel</a>
        </div>

    );
}

export default SubscriptionInfo;
