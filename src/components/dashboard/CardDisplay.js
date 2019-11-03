import React, { useState } from "react";
import "./CardDisplay.css";
var base64 = require('base-64');

const CardInfo = props => {
  const [cards, setCards] = useState([]);

  fetch('/cards/user/' + props.user_token, {
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Basic '+base64.encode(process.env.REACT_APP_AUTH), 
        'Content-Type': 'application/json'
    })
  })
  .then(result=>result.json())
  return (
    <ul>
        {cards.map(cards=><li>{cards}</li>)}
    </ul>
  );

}

export default CardInfo;
