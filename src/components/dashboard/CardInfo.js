import React, { useState } from "react";
import SubscriptionInfo from "./SubscriptionInfo.js";
import subscriptions from "./subscriptions.json";
import Plastic from 'react-plastic';
import "./CardInfo.css"

const CardInfo = props => {
    const [exclude, setExclude] = useState([]);

    const excludeSubscription = token => {
        let joined = exclude.concat(token);
        setExclude(joined);
    };

    return (
        <div class="card">
            <div class="card-image">
                <Plastic
                    type="visa"
                    name="Jane Murray"
                    expiry="10/21"
                    number={"************".concat(props.card['last_four'])}
                    cvc="***"
                />
            </div>
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
