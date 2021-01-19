import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState()

    useEffect(() => {
        fetch("http://localhost:3333")
            .then(res => res.json())
            .then(res => setMessage(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>
                    {message ? message.title : "Waiting title"}
                </h2>
                <p>
                    {message ? message.message : "Waiting message"}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
