import React, { useState } from "react";

const CardInfo = props => {
    return (
        <li>{ props.card['last_four'] }</li>
    );
}

export default CardInfo;
