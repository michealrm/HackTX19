import React, {useState} from 'react';
import Login from './components/Login.js'
import './App.css';

function App() {

    const [user, setUser] = useState();
    const handleLogin = loginName => {
        console.log(loginName);
        setUser(loginName);
    };

    if(!user) {
        return (
            <Login success={handleLogin}/>
        );
    } else {
        return (
            <p>Hello</p>
        );
    }

}

export default App;
