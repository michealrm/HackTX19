import React, {useState} from 'react';
import Login from './components/Login.js'
import CardsDisplay from './components/dashboard/CardsDisplay.js'
import './App.css';

function App() {

    const [user, setUser] = useState();
    const handleLogin = loginName => {
        setUser(loginName);
    };

    if(!user) {
        return (
            <div>
                <Login success={handleLogin} />
            </div>
        );
    } else {
        return (
            <CardsDisplay user_token='14220d65-299b-42ad-bb5b-1b2a45b6e855'/>
        );
    }

}

export default App;
