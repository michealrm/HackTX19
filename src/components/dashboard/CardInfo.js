import React, { useState } from "react";
import SubscriptionInfo from "./SubscriptionInfo.js"
import subscriptions from "./subscriptions.json"

const CardInfo = props => {
    const [exclude, setExclude] = useState([]);

    const excludeSubscription = token => {
        let joined = exclude.concat(token);
        console.log('tokennn ' + token);
        setExclude(joined);
    };

    console.log("hhhhhhhh " + exclude);
    return (
        <div class="card">
            <p>{ props.card['last_four'] }</p>
            <div class="subscriptions">
                {
                    subscriptions
                        .filter(item => !exclude.includes(item.token))
                        .map(item => <SubscriptionInfo key={item.token} subscription={item} excludeSubscription={excludeSubscription} />)
                }
            </div>
        </div>
    );
}

export default CardInfo;
