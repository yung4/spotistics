import React from 'react';
import logo from './logo.svg';
import './App.css';

var client_id = "ec8137c7bac0479b987d22b38d978bf7"; 
var response_type = "token";
var redirect_uri = "http://localhost:3000";

var link = ("https://accounts.spotify.com/authorize?" + 
            "client_id=" + client_id + 
            "&redirect_uri=" + redirect_uri + 
            "&response_type=" + response_type +
            "&show_dialog=false" 
            );

//figure out how to get authentification token from redirected url!!

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href={link}>
          Login to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;