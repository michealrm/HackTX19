import React, {useState} from 'react';
import Login from './components/Login.js'
import CardDisplay from './components/dashboard/CardDisplay.js'
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
            <CardDisplay />
        );
    }

}

export default App;
