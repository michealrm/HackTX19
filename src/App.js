import React, {useState} from 'react';
import Login from './components/Login.js'
import CardInfo from './components/dashboard/CardInfo.js'
import './App.css';

function App() {

    console.log(process.env);
    console.log(process.env.REACT_APP_AUTH);
    const [user, setUser] = useState();
    const handleLogin = loginName => {
        setUser(loginName);
    };

    if(!user) {
        return (
            <Login success={handleLogin}/>
        );
    } else {
        return (
            <CardInfo />
        );
    }

}

export default App;
