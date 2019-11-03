import React, { useState } from "react";
import "./CardDisplay.css";

const CardInfo = props => {
  const [cards, setCards] = useState([]);

  fetch('https://shared-sandbox-api.marqeta.com/v3/cards/user/' + props.user_token, {
    method: 'post', 
    headers: new Headers({
        'Authorization': 'Basic '+btoa(process.env.REACT_APP_AUTH), 
        'Content-Type': 'application/json'
    })
  })
  .then(result=>result.json())
  .then(result=>console.log(result))
  return (
    <ul>
        {cards.map(cards=><li>{cards}</li>)}
    </ul>
  );

}

export default CardInfo;
