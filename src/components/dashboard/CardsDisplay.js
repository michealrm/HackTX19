import React, { useState } from "react";
import CardInfo from "./CardInfo.js";
import { Button } from "react-bootstrap";
var base64 = require('base-64');

const CardsDisplay = props => {
  const [cards, setCards] = useState(null);
  if(!cards) {
      fetch('/cards/user/' + props.user_token, {
        method: 'get', 
        headers: new Headers({
            'Authorization': 'Basic '+base64.encode(process.env.REACT_APP_AUTH), 
            'Content-Type': 'application/json'
        })
      })
      .then(result=>result.json())
      .then(result=> {
          setCards(result['data']);
      })
      .catch(rejected=> {
          return (
              <p>{"Couldn't load cards. " + rejected}</p>
          );
      });
  } else {
      return (
          <div class="cards">
            {cards.map(item => <CardInfo card={item} />)}
          </div>
      );
  }
    return (
        <p>{JSON.stringify(cards)}</p>
    );
}

export default CardsDisplay;
