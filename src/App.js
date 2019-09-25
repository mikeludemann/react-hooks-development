import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Button></Button>
      </section>
      <footer className="App-footer">
        &#169; Copyright 2019
      </footer>
    </div>
  );
}

export default App;
