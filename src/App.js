import React, { useRef, useState } from 'react';
import { Button, message } from 'antd';

const App = (props) => {
  const [messageApi, contextHolder] = message.useMessage()
  const { welcomeMsg } = props.values

  const mySuccess = () => {
    messageApi.open({
      type: 'success',
      content: welcomeMsg,
      duration: 3,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={'./static/logo.svg'} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to My Extension</h1>
      </header>
      <p className="App-btn">
        <Button type="primary" id={"myBtn"} onClick={mySuccess}>Click me</Button>
      </p>
      {contextHolder}
    </div>
  );
};

export default App;
