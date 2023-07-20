import React from 'react';
import { Button } from 'antd';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./static/logo.svg'} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to My Extension</h1>
      </header>
      <p className="App-btn">
        <Button type="primary" id={"myBtn"}>Click me</Button>
      </p>
    </div>
  );
};

export default App;
